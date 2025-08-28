// Client data types
export interface Executive {
  name: string;
  title: string;
  bio: string;
}

export interface Technology {
  name: string;
  description: string;
}

export interface KPIData {
  value: string;
  label: string;
  trend: 'positive' | 'negative' | 'neutral';
}

export interface NewsItem {
  title: string;
  date: string;
  url: string;
}

export interface StrategicInitiative {
  title: string;
  items: string[];
}

export interface Reference {
  title: string;
  date: string;
  url: string;
}

export interface Client {
  id: string;
  name: string;
  industry: string;
}

export interface CompanyData {
  id: string;
  name: string;
  description: string;
  industry: string;
  sub_industry: string;
  headquarters: string;
  annual_revenue: number;
  employee_count: number;
  kpis: {
    memberBase: KPIData;
    revenue: KPIData;
    marketPresence: KPIData;
    ranking: KPIData;
  };
  technologies: Technology[];
  executives: Executive[];
  financials: Record<string, string>;
  creditRatings: Record<string, string>;
  news: NewsItem[];
  strategicInitiatives: Record<string, StrategicInitiative>;
  references: Reference[];
}