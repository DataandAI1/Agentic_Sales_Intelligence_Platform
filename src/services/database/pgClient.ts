import { Pool } from 'pg';
import pgvector from 'pgvector/pg';

// Database connection pool
const pool = new Pool({
  host: process.env.REACT_APP_DB_HOST,
  port: parseInt(process.env.REACT_APP_DB_PORT || '5432'),
  database: process.env.REACT_APP_DB_NAME,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Register pgvector type
pgvector.registerType(pool);

export interface Service {
  id: string;
  service_name: string;
  service_code: string;
  description: string;
  key_activities: string[];
  business_outcomes: Record<string, any>;
  ui_metadata?: Record<string, any>;
  embedding?: number[];
  published: boolean;
  version: number;
  created_at: Date;
  updated_at: Date;
}

export interface ClientIntelligence {
  id: string;
  company_name: string;
  industry: string;
  sub_industry?: string;
  annual_revenue?: number;
  employee_count?: number;
  geographic_regions?: string[];
  digital_maturity_score?: number;
  ai_readiness_indicators?: Record<string, any>;
  pain_points?: string[];
  opportunity_scores?: Record<string, number>;
  propensity_to_buy?: Record<string, number>;
  created_at: Date;
  updated_at: Date;
}

class DatabaseService {
  // Services CRUD
  async getServices(filters?: { published?: boolean }): Promise<Service[]> {
    const query = filters?.published !== undefined
      ? 'SELECT * FROM agentic_sales.services WHERE published = $1 ORDER BY service_name'
      : 'SELECT * FROM agentic_sales.services ORDER BY service_name';
    
    const params = filters?.published !== undefined ? [filters.published] : [];
    const result = await pool.query(query, params);
    return result.rows;
  }

  async getServiceById(id: string): Promise<Service | null> {
    const result = await pool.query(
      'SELECT * FROM agentic_sales.services WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  async createService(service: Partial<Service>): Promise<Service> {
    const result = await pool.query(
      `INSERT INTO agentic_sales.services 
       (service_name, service_code, description, key_activities, business_outcomes, published)
       VALUES ($1, $2, $3, $4, $5, $6) 
       RETURNING *`,
      [
        service.service_name,
        service.service_code,
        service.description,
        service.key_activities,
        service.business_outcomes,
        service.published || false
      ]
    );
    return result.rows[0];
  }

  async updateService(id: string, updates: Partial<Service>): Promise<Service> {
    const result = await pool.query(
      `UPDATE agentic_sales.services 
       SET service_name = $2, description = $3, key_activities = $4, 
           business_outcomes = $5, published = $6, updated_at = NOW()
       WHERE id = $1 
       RETURNING *`,
      [
        id,
        updates.service_name,
        updates.description,
        updates.key_activities,
        updates.business_outcomes,
        updates.published
      ]
    );
    return result.rows[0];
  }

  // Client Intelligence CRUD
  async getClients(filters?: { industry?: string }): Promise<ClientIntelligence[]> {
    let query = 'SELECT * FROM agentic_sales.client_intelligence';
    const params: any[] = [];
    
    if (filters?.industry) {
      query += ' WHERE industry = $1';
      params.push(filters.industry);
    }
    
    query += ' ORDER BY company_name';
    const result = await pool.query(query, params);
    return result.rows;
  }

  async getClientById(id: string): Promise<ClientIntelligence | null> {
    const result = await pool.query(
      'SELECT * FROM agentic_sales.client_intelligence WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  // Vector similarity search
  async searchByEmbedding(embedding: number[], limit: number = 10): Promise<any[]> {
    const result = await pool.query(
      `SELECT *, 1 - (embedding <=> $1) as similarity 
       FROM agentic_sales.services 
       WHERE embedding IS NOT NULL 
       ORDER BY embedding <=> $1 
       LIMIT $2`,
      [pgvector.toSql(embedding), limit]
    );
    return result.rows;
  }

  // Service-Client Fit Analysis
  async getServiceClientFit(clientId: string, serviceId: string): Promise<any> {
    const result = await pool.query(
      `SELECT * FROM agentic_sales.service_client_fit 
       WHERE client_id = $1 AND service_id = $2`,
      [clientId, serviceId]
    );
    return result.rows[0] || null;
  }

  // Generate Sales Guide
  async generateSalesGuide(clientId: string, userId: string, guideType: string): Promise<any> {
    const result = await pool.query(
      'SELECT agentic_sales.generate_sales_guide($1, $2, $3)',
      [clientId, userId, guideType]
    );
    return result.rows[0];
  }
}

export const dbService = new DatabaseService();
export default pool;