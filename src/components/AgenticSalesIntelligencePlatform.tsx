import React, { useState } from 'react';
import { 
  Search, 
  Building2, 
  TrendingUp, 
  Brain, 
  Shield, 
  Database,
  Users,
  AlertCircle,
  ChevronRight,
  Download,
  Filter,
  BarChart3,
  Activity,
  Target,
  Zap,
  Globe,
  Settings,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  ArrowRight,
  Eye,
  Layers,
  GitBranch,
  Cpu,
  BookOpen,
  UserCheck,
  ShieldCheck,
  DollarSign,
  AlertTriangle,
  Sparkles,
  Calendar,
  Info,
  ChevronDown,
  Award,
  PlayCircle,
  MessageSquare,
  Phone,
  Home,
  ExternalLink,
  Building,
  Package,
  Bot,
  Headphones,
  Edit3,
  Rocket,
  FileCheck,
  Link,
  CheckSquare,
  Timer,
  TrendingDown,
  Briefcase,
  Clipboard,
  Code
} from 'lucide-react';

// Design System Colors
const colors = {
  primary: '#00D4AA',
  primaryDark: '#00A886',
  navy: '#0A1628',
  navyLight: '#1C2B3D',
  white: '#FFFFFF',
  grayLight: '#F5F5F5',
  grayMedium: '#949494',
  grayDark: '#333333',
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  purple: '#5D3C81',
  purpleLight: '#8B5FC7'
};

// Data from database: public.top_client_agents
const clientAgentData = [
  // Healthfirst agents
  {
    id: 1, client_id: '1', client_name: 'Healthfirst', client_industry: 'Healthcare Insurance',
    agent_id: 91, agent_name: 'Member Engagement Agent', agent_type: 'Proactive Outreach',
    department: 'Customer Service', platform: 'Salesforce',
    relevance_reason: 'Essential for managing 1.8M members across NYC. This AI agent proactively identifies members needing intervention based on claims data, gaps in care, and social determinants of health.',
    potential_impact: 'Increase preventive care compliance by 35%, reduce ER visits by 20%, improve member retention by 15%. Direct impact on Star Ratings and $280M in quality bonuses.',
    key_capabilities: 'Predictive analytics for member risk, automated multi-channel outreach, personalized health coaching, appointment scheduling, medication reminders',
    integration_requirements: 'Integration with claims system, EHR data, pharmacy systems, CRM, and communication platforms',
    priority_rank: 1, is_deployed: false,
    expected_roi: '400% ROI in 18 months',
    estimated_cost: '$2.5M initial + $500K/year',
    time_to_deploy: '4-6 months',
    categorization_l1: 'Content Generation'
  },
  {
    id: 2, client_id: '1', client_name: 'Healthfirst', client_industry: 'Healthcare Insurance',
    agent_id: 88, agent_name: 'Prior Authorization Agent', agent_type: 'Process Automation',
    department: 'Operations', platform: 'Salesforce',
    relevance_reason: 'Automates the complex prior authorization process that currently causes provider frustration and member care delays. Handles 80% of routine authorizations without human intervention.',
    potential_impact: 'Reduce authorization time from 5 days to 2 hours, decrease denial rates by 30%, improve provider satisfaction by 40%. Save $35M annually in administrative costs.',
    key_capabilities: 'AI-driven clinical criteria matching, automatic documentation review, real-time eligibility verification, provider portal integration, appeals processing',
    integration_requirements: 'HL7 FHIR integration with provider EMRs, payer systems, clinical guidelines database, CMS regulations',
    priority_rank: 2, is_deployed: false,
    expected_roi: '500% ROI in 12 months',
    estimated_cost: '$3M initial + $600K/year',
    time_to_deploy: '6-8 months',
    categorization_l1: 'Employee Efficiency'
  },
  {
    id: 3, client_id: '1', client_name: 'Healthfirst', client_industry: 'Healthcare Insurance',
    agent_id: 95, agent_name: 'Health Risk Assessment', agent_type: 'Predictive Analytics',
    department: 'Operations', platform: 'AWS',
    relevance_reason: 'Continuously analyzes member data to identify high-risk individuals before acute events occur. Critical for Medicaid and Medicare Advantage populations.',
    potential_impact: 'Identify 40% more at-risk members, reduce hospitalizations by 25%, improve risk adjustment factor by 0.15. Generate $50M in additional risk-adjusted revenue.',
    key_capabilities: 'Machine learning risk models, social determinant analysis, predictive hospitalization algorithms, care gap identification, stratification engine',
    integration_requirements: 'Integration with claims, pharmacy, lab results, HIE data, social services databases',
    priority_rank: 3, is_deployed: true,
    expected_roi: '600% ROI in 24 months',
    estimated_cost: '$4M initial + $800K/year',
    time_to_deploy: '3-4 months',
    categorization_l1: 'Content Generation'
  },
  {
    id: 4, client_id: '1', client_name: 'Healthfirst', client_industry: 'Healthcare Insurance',
    agent_id: 20, agent_name: 'Document compliance agent', agent_type: 'Agent',
    department: 'Customer Service', platform: 'Copilot',
    relevance_reason: 'Real-time analysis of member interactions across all channels to detect dissatisfaction, confusion, or potential churn. Enables immediate intervention.',
    potential_impact: 'Reduce member churn by 20%, improve NPS by 25 points, prevent 70% of formal complaints. Save $30M in retention costs.',
    key_capabilities: 'Calls handled by agents; CSAT; service quality scores; issue resolution time; FCR',
    integration_requirements: '',
    priority_rank: 4, is_deployed: false,
    expected_roi: '350% ROI in 15 months',
    estimated_cost: '$1.5M initial + $400K/year',
    time_to_deploy: '3-4 months',
    categorization_l1: 'Analysis'
  },
  {
    id: 5, client_id: '1', client_name: 'Healthfirst', client_industry: 'Healthcare Insurance',
    agent_id: 97, agent_name: 'Fraud Detection Agent', agent_type: 'Risk Management',
    department: 'Operations', platform: 'AWS',
    relevance_reason: 'AI agent that identifies fraudulent claims patterns, provider anomalies, and member abuse in real-time. Essential for protecting $14.2B in annual revenue.',
    potential_impact: 'Detect 50% more fraud cases, reduce false positives by 60%, recover $40M annually in fraudulent payments. Protect plan integrity.',
    key_capabilities: 'Pattern recognition, anomaly detection, network analysis, predictive modeling, case prioritization, automated investigation workflows',
    integration_requirements: 'Integration with claims processing, provider databases, member records, external fraud databases, SIU systems',
    priority_rank: 5, is_deployed: false,
    expected_roi: '800% ROI in 18 months',
    estimated_cost: '$3.5M initial + $700K/year',
    time_to_deploy: '5-6 months',
    categorization_l1: 'Content Generation'
  },
  // Fifth Third Bank agents
  {
    id: 16, client_id: '2', client_name: 'Fifth Third Bank', client_industry: 'Banking & Financial Services',
    agent_id: 97, agent_name: 'Fraud Detection Agent', agent_type: 'Risk Management',
    department: 'Operations', platform: 'AWS',
    relevance_reason: 'Critical for protecting $211B in assets and 8.7M customers. Real-time fraud detection across all channels with machine learning that adapts to new threats.',
    potential_impact: 'Reduce fraud losses by 50% ($60M annually), decrease false positives by 65%, improve customer trust. Process 10M+ transactions daily.',
    key_capabilities: 'Real-time transaction scoring, behavioral analytics, device fingerprinting, network analysis, automated case management, merchant profiling',
    integration_requirements: 'Integration with core banking, card processing, ACH systems, mobile/online banking, third-party fraud databases',
    priority_rank: 1, is_deployed: true,
    expected_roi: '600% ROI in 12 months',
    estimated_cost: '$5M initial + $1M/year',
    time_to_deploy: '4-6 months',
    categorization_l1: 'Content Generation'
  },
  {
    id: 17, client_id: '2', client_name: 'Fifth Third Bank', client_industry: 'Banking & Financial Services',
    agent_id: 99, agent_name: 'Customer Onboarding Agent', agent_type: 'Customer Acquisition',
    department: 'Customer Service', platform: 'Genesys Cloud',
    relevance_reason: 'Streamlines account opening across channels, critical for Southeast expansion. Current 30% abandonment rate costs 100K potential customers annually.',
    potential_impact: 'Reduce onboarding from 20 to 5 minutes, decrease abandonment to 8%, ensure 100% KYC/AML compliance. Acquire 150K new customers/year.',
    key_capabilities: 'Identity verification, document OCR, risk scoring, product recommendation, automated account setup, cross-sell intelligence',
    integration_requirements: 'Integration with KYC/AML systems, credit bureaus, core banking, document management, CRM',
    priority_rank: 2, is_deployed: true,
    expected_roi: '450% ROI in 15 months',
    estimated_cost: '$3M initial + $600K/year',
    time_to_deploy: '4-5 months',
    categorization_l1: 'Content Generation'
  },
  {
    id: 18, client_id: '2', client_name: 'Fifth Third Bank', client_industry: 'Banking & Financial Services',
    agent_id: 98, agent_name: 'Loan Underwriting Assistant', agent_type: 'Credit Operations',
    department: 'Operations', platform: 'Salesforce',
    relevance_reason: 'Automated underwriting for consumer and small business loans. Essential for competing with fintechs and supporting Dividend Finance acquisition.',
    potential_impact: 'Reduce decision time to 60 seconds, increase approval rates by 20%, process 5x more applications. Generate $200M in new loans.',
    key_capabilities: 'Credit risk modeling, income verification, fraud detection, pricing optimization, document analysis, decision explanation',
    integration_requirements: 'Integration with credit bureaus, banking systems, document management, regulatory reporting, loan origination system',
    priority_rank: 3, is_deployed: false,
    expected_roi: '700% ROI in 18 months',
    estimated_cost: '$4M initial + $800K/year',
    time_to_deploy: '6-8 months',
    categorization_l1: 'Analysis'
  },
  // Alaska Airlines agents
  {
    id: 31, client_id: '3', client_name: 'Alaska Airlines', client_industry: 'Airline Transportation',
    agent_id: 134, agent_name: 'Transaction dispute agent', agent_type: 'Agent',
    department: '', platform: 'Copilot',
    relevance_reason: 'Critical for 1,200+ daily flights through challenging weather regions. AI agent predicts weather impacts hours ahead and recommends operational adjustments.',
    potential_impact: 'Reduce weather delays by 45%, improve OTP to 87%, save $100M in delay costs. Maintain #1 on-time performance ranking.',
    key_capabilities: 'Manage risk and compliance; opex % of revenue; assets under management; increase client retention',
    integration_requirements: '',
    priority_rank: 1, is_deployed: true,
    expected_roi: '600% ROI in 12 months',
    estimated_cost: '$3M initial + $600K/year',
    time_to_deploy: '3-4 months',
    categorization_l1: 'Contact Resolution'
  },
  {
    id: 32, client_id: '3', client_name: 'Alaska Airlines', client_industry: 'Airline Transportation',
    agent_id: 128, agent_name: 'Fleet Maintenance Predictor', agent_type: 'Predictive Maintenance',
    department: 'Operations', platform: 'AWS',
    relevance_reason: 'AI agent monitoring 300+ aircraft health in real-time, predicting failures before they occur. Essential for new 737 MAX fleet.',
    potential_impact: 'Reduce unscheduled maintenance by 40%, improve aircraft availability by 6%, prevent 95% of potential AOG events. Save $75M annually.',
    key_capabilities: 'Sensor data analysis, failure prediction, maintenance optimization, parts inventory management, compliance tracking',
    integration_requirements: 'Integration with aircraft sensors, maintenance systems, parts inventory, regulatory databases, OEM systems',
    priority_rank: 2, is_deployed: false,
    expected_roi: '550% ROI in 15 months',
    estimated_cost: '$5M initial + $1M/year',
    time_to_deploy: '6-8 months',
    categorization_l1: 'Analysis'
  },
  {
    id: 33, client_id: '3', client_name: 'Alaska Airlines', client_industry: 'Airline Transportation',
    agent_id: 127, agent_name: 'Route Optimization Agent', agent_type: 'Network Planning',
    department: 'Operations', platform: 'AWS',
    relevance_reason: 'Continuously optimizes flight paths and network planning, especially critical for Hawaiian merger integration.',
    potential_impact: 'Reduce fuel consumption by 10% ($260M), optimize connections, improve aircraft utilization by 12%. Enhance network profitability.',
    key_capabilities: 'Dynamic route planning, fuel optimization, slot management, connection optimization, demand forecasting',
    integration_requirements: 'Integration with GDS, reservation systems, fuel systems, ATC, weather services, crew planning',
    priority_rank: 3, is_deployed: false,
    expected_roi: '900% ROI in 18 months',
    estimated_cost: '$4M initial + $800K/year',
    time_to_deploy: '5-6 months',
    categorization_l1: 'Employee Efficiency'
  }
];

// Data from database: public.cnx_inventory
const cnxInventoryData = [
  {
    id: 101, agent_name: 'Intelligent Document Processor', agent_type: 'Document Automation',
    department: 'Operations', platform: 'Azure AI',
    categorization_l1: 'Content Generation',
    industry_vertical: 'Cross-Industry',
    complexity_level: 'Medium',
    is_deployed: true,
    description: 'Automated extraction and processing of structured data from unstructured documents across various formats',
    key_capabilities: 'OCR, NLP document understanding, automated data extraction, classification, validation workflows',
    estimated_cost: '$150K initial + $30K/year',
    time_to_deploy: '2-3 months'
  },
  {
    id: 102, agent_name: 'Smart Customer Support Agent', agent_type: 'Customer Service',
    department: 'Customer Service', platform: 'Genesys Cloud',
    categorization_l1: 'Contact Resolution',
    industry_vertical: 'Cross-Industry',
    complexity_level: 'High',
    is_deployed: true,
    description: 'AI-powered customer service agent that handles complex queries and escalates appropriately',
    key_capabilities: 'Natural language understanding, sentiment analysis, issue classification, automated responses, escalation logic',
    estimated_cost: '$200K initial + $50K/year',
    time_to_deploy: '3-4 months'
  },
  {
    id: 103, agent_name: 'Code Review Assistant', agent_type: 'Development Support',
    department: 'Engineering', platform: 'GitHub Copilot',
    categorization_l1: 'Employee Efficiency',
    industry_vertical: 'Technology',
    complexity_level: 'Medium',
    is_deployed: false,
    description: 'Automated code review and quality assurance with security vulnerability detection',
    key_capabilities: 'Static code analysis, security scanning, performance optimization, best practices enforcement',
    estimated_cost: '$100K initial + $25K/year',
    time_to_deploy: '1-2 months'
  },
  {
    id: 104, agent_name: 'Financial Report Analyzer', agent_type: 'Financial Intelligence',
    department: 'Finance', platform: 'AWS',
    categorization_l1: 'Analysis',
    industry_vertical: 'Financial Services',
    complexity_level: 'High',
    is_deployed: true,
    description: 'Advanced financial document analysis and insight generation for regulatory compliance',
    key_capabilities: 'Financial data extraction, trend analysis, anomaly detection, regulatory compliance checking',
    estimated_cost: '$300K initial + $75K/year',
    time_to_deploy: '4-5 months'
  },
  {
    id: 105, agent_name: 'Sales Lead Qualifier', agent_type: 'Sales Automation',
    department: 'Sales', platform: 'Salesforce',
    categorization_l1: 'Analysis',
    industry_vertical: 'Cross-Industry',
    complexity_level: 'Medium',
    is_deployed: false,
    description: 'Intelligent lead scoring and qualification based on behavioral and demographic data',
    key_capabilities: 'Lead scoring, behavioral analysis, predictive modeling, CRM integration, automated outreach',
    estimated_cost: '$180K initial + $40K/year',
    time_to_deploy: '2-3 months'
  },
  {
    id: 106, agent_name: 'Content Personalization Engine', agent_type: 'Marketing Automation',
    department: 'Marketing', platform: 'Adobe Experience',
    categorization_l1: 'Content Generation',
    industry_vertical: 'Retail/E-commerce',
    complexity_level: 'High',
    is_deployed: true,
    description: 'Dynamic content generation and personalization for web and mobile experiences',
    key_capabilities: 'Content generation, A/B testing, personalization algorithms, user behavior analysis',
    estimated_cost: '$250K initial + $60K/year',
    time_to_deploy: '3-4 months'
  },
  {
    id: 107, agent_name: 'Supply Chain Optimizer', agent_type: 'Operations Intelligence',
    department: 'Operations', platform: 'SAP',
    categorization_l1: 'Analysis',
    industry_vertical: 'Manufacturing',
    complexity_level: 'High',
    is_deployed: false,
    description: 'AI-driven supply chain optimization and demand forecasting',
    key_capabilities: 'Demand forecasting, inventory optimization, supplier risk assessment, route optimization',
    estimated_cost: '$400K initial + $100K/year',
    time_to_deploy: '6-8 months'
  },
  {
    id: 108, agent_name: 'HR Talent Matcher', agent_type: 'Human Resources',
    department: 'Human Resources', platform: 'Workday',
    categorization_l1: 'Employee Efficiency',
    industry_vertical: 'Cross-Industry',
    complexity_level: 'Medium',
    is_deployed: true,
    description: 'Intelligent candidate screening and job matching for recruitment processes',
    key_capabilities: 'Resume parsing, skill matching, bias reduction, interview scheduling, candidate ranking',
    estimated_cost: '$120K initial + $35K/year',
    time_to_deploy: '2-3 months'
  },
  {
    id: 109, agent_name: 'Compliance Monitor', agent_type: 'Risk Management',
    department: 'Compliance', platform: 'ServiceNow',
    categorization_l1: 'Analysis',
    industry_vertical: 'Financial Services',
    complexity_level: 'High',
    is_deployed: false,
    description: 'Automated compliance monitoring and regulatory reporting across multiple jurisdictions',
    key_capabilities: 'Regulatory tracking, automated reporting, risk assessment, policy enforcement',
    estimated_cost: '$350K initial + $85K/year',
    time_to_deploy: '5-6 months'
  },
  {
    id: 110, agent_name: 'Social Media Sentiment Analyzer', agent_type: 'Brand Intelligence',
    department: 'Marketing', platform: 'Sprout Social',
    categorization_l1: 'Analysis',
    industry_vertical: 'Cross-Industry',
    complexity_level: 'Medium',
    is_deployed: true,
    description: 'Real-time social media monitoring and sentiment analysis for brand management',
    key_capabilities: 'Sentiment analysis, trend detection, competitor monitoring, crisis detection, automated responses',
    estimated_cost: '$80K initial + $20K/year',
    time_to_deploy: '1-2 months'
  },
  {
    id: 111, agent_name: 'Email Campaign Optimizer', agent_type: 'Marketing Automation',
    department: 'Marketing', platform: 'Mailchimp',
    categorization_l1: 'Content Generation',
    industry_vertical: 'Cross-Industry',
    complexity_level: 'Low',
    is_deployed: true,
    description: 'Automated email campaign creation and optimization based on user behavior',
    key_capabilities: 'Subject line optimization, send time prediction, content personalization, A/B testing',
    estimated_cost: '$60K initial + $15K/year',
    time_to_deploy: '1 month'
  },
  {
    id: 112, agent_name: 'Network Security Agent', agent_type: 'Cybersecurity',
    department: 'IT Security', platform: 'CrowdStrike',
    categorization_l1: 'Analysis',
    industry_vertical: 'Cross-Industry',
    complexity_level: 'High',
    is_deployed: false,
    description: 'AI-powered network threat detection and automated incident response',
    key_capabilities: 'Threat detection, anomaly analysis, automated response, incident classification',
    estimated_cost: '$500K initial + $120K/year',
    time_to_deploy: '4-6 months'
  }
];

// Get unique categorizations and their icons
const getCategoryIcon = (category: string) => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'Content Generation': <Edit3 size={20} />,
    'Analysis': <BarChart3 size={20} />,
    'Communication': <MessageSquare size={20} />,
    'Contact Resolution': <Headphones size={20} />,
    'Employee Efficiency': <Users size={20} />
  };
  return categoryIcons[category] || <Layers size={20} />;
};

const getCategoryColor = (category: string) => {
  const categoryColors: Record<string, string> = {
    'Content Generation': colors.purple,
    'Analysis': colors.info,
    'Communication': colors.success,
    'Contact Resolution': colors.warning,
    'Employee Efficiency': colors.primary
  };
  return categoryColors[category] || colors.grayMedium;
};

// Mock Data function for development/demonstration
const getClientData = (companyId: string) => {
  const mockData: Record<string, any> = {
    1: { // Healthfirst
      id: '1',
      name: 'Healthfirst',
      description: 'Healthfirst is one of the largest not-for-profit health insurers in New York, serving 1.8 million members across New York City and Long Island. As a provider-sponsored health plan with deep roots in community health centers, Healthfirst offers affordable coverage through Medicaid, Medicare Advantage, Qualified Health Plans, and other programs.',
      industry: 'Healthcare Insurance',
      sub_industry: 'Health Insurance',
      headquarters: 'New York, NY',
      annual_revenue: 14200000000,
      employee_count: 4500,
      kpis: {
        memberBase: { value: '1.8M', label: 'Health Plan Members', trend: 'positive' },
        revenue: { value: '$14.2B', label: 'FY 2024 (+12% YoY)', trend: 'positive' },
        marketPresence: { value: 'NY Metro', label: 'NYC & Long Island', trend: 'positive' },
        ranking: { value: '#1', label: 'NY Medicaid', trend: 'positive' }
      },
      technologies: [
        { 
          name: 'Salesforce Health Cloud', 
          description: 'Unified member engagement platform for personalized care coordination and member journey management'
        },
        { 
          name: 'Amazon Connect', 
          description: 'Cloud-based contact center solution with AI-powered routing and real-time analytics'
        },
        { 
          name: 'Twilio Flex', 
          description: 'Programmable contact center platform for omnichannel member support and engagement'
        },
        { 
          name: 'Nuance Dragon Medical', 
          description: 'AI-powered speech recognition for clinical documentation and care management workflows'
        },
        {
          name: 'My Healthfirst App',
          description: 'Integrated mobile platform providing personalized member experiences and digital health tools'
        }
      ],
      executives: [
        { 
          name: 'Pat Wang', 
          title: 'President & CEO', 
          bio: 'Leading transformation to value-based care model. Former COO of EmblemHealth with 25+ years in healthcare leadership.' 
        },
        { 
          name: 'Jay Schechtman', 
          title: 'Chief Financial Officer', 
          bio: 'Oversees financial strategy and operations. 20+ years healthcare finance experience including roles at Aetna.' 
        },
        { 
          name: 'Emily Chen', 
          title: 'Chief Technology Officer', 
          bio: 'Driving digital transformation and AI initiatives. Previously led innovation at Oscar Health.' 
        },
        {
          name: 'Dr. Vincent Marchello',
          title: 'Chief Medical Officer',
          bio: 'Leads clinical quality and medical management programs. Board-certified physician with expertise in population health.'
        },
        {
          name: 'Susan Beuchert',
          title: 'Chief Operating Officer',
          bio: 'Manages health plan operations and member services. Former SVP at Empire BlueCross BlueShield.'
        },
        {
          name: 'Errol Pierre',
          title: 'SVP, Government Programs',
          bio: 'Oversees Medicaid and Medicare programs. Expert in government relations and regulatory compliance.'
        }
      ],
      financials: {
        totalRevenue: '$14.2 billion (+12% YoY)',
        netIncome: '$320 million (-5% YoY)',
        operatingResult: '$280 million',
        cashInvestments: '$3.8 billion',
        netAssets: '$2.1 billion',
        employees: '4,500+'
      },
      creditRatings: {
        amBest: 'A- (Excellent)',
        standardPoors: 'BBB+ (Stable)',
        moodys: 'Baa1 (Stable)'
      },
      news: [
        { title: 'Healthfirst Expands Medicare Advantage Plans in Brooklyn', date: 'July 28, 2025', url: '#' },
        { title: 'Q2 2025: Revenue Grows 15% Driven by Medicaid Enrollment', date: 'July 15, 2025', url: '#' },
        { title: 'Partners with Mount Sinai for Value-Based Care Initiative', date: 'June 20, 2025', url: '#' },
        { title: 'Launches AI-Powered Prior Authorization Platform', date: 'June 10, 2025', url: '#' },
        { title: 'Named #1 Medicaid Plan in New York by NCQA', date: 'May 30, 2025', url: '#' }
      ],
      strategicInitiatives: {
        livingHealth: {
          title: 'Digital-First Member Experience',
          items: [
            'Mobile app redesign with personalized health journeys',
            'Integration of telehealth across all plans',
            'AI-powered care navigation',
            'Predictive analytics for member outreach'
          ]
        },
        partnerships: {
          title: 'Strategic Healthcare Partnerships',
          items: [
            'Mount Sinai Health System alliance',
            'NYC Health + Hospitals collaboration',
            'Community health center network expansion',
            'Behavioral health provider integration'
          ]
        },
        marketExpansion: {
          title: 'Market Growth Initiatives',
          items: [
            'Expansion into Nassau and Suffolk counties',
            'New Medicare Advantage products',
            'Enhanced Medicaid managed care offerings',
            'Small business health plan solutions'
          ]
        },
        technology: {
          title: 'Technology Investments',
          items: [
            '$150M digital transformation program',
            'Cloud migration to AWS',
            'API-first architecture development',
            'Real-time data analytics platform'
          ]
        }
      },
      references: [
        { title: 'Healthfirst 2024 Annual Report', date: '2024', url: 'https://healthfirst.org/annualreport' },
        { title: 'NCQA Health Plan Ratings 2025', date: '2025', url: '#' },
        { title: 'NY Department of Health Medicaid Report', date: '2025', url: '#' },
        { title: 'Modern Healthcare: Healthfirst Profile', date: 'March 2025', url: '#' }
      ]
    },
    2: { // Fifth Third Bank
      id: '2',
      name: 'Fifth Third Bank',
      description: 'Fifth Third Bank is a diversified financial services company headquartered in Cincinnati, serving customers across 11 states with $211 billion in assets. As one of the largest U.S.-based consumer banks, it provides a broad range of financial products and services.',
      industry: 'Banking & Financial Services',
      sub_industry: 'Banking',
      headquarters: 'Cincinnati, OH',
      annual_revenue: 8500000000,
      employee_count: 19000,
      kpis: {
        memberBase: { value: '8.7M', label: 'Retail Customers', trend: 'positive' },
        revenue: { value: '$8.5B', label: 'FY 2024 (+7% YoY)', trend: 'positive' },
        marketPresence: { value: '11 States', label: 'Midwest & Southeast', trend: 'positive' },
        ranking: { value: '#12', label: 'US Bank by Assets', trend: 'positive' }
      },
      technologies: [
        { name: 'nCino Cloud Banking', description: 'End-to-end digital banking platform for commercial lending and onboarding' },
        { name: 'Personetics AI', description: 'AI-driven personalized insights and financial guidance for retail customers' },
        { name: 'Q2 Digital Banking', description: 'Comprehensive digital banking solutions for retail and SMB segments' },
        { name: 'Alloy Identity Platform', description: 'Automated KYC, AML, and fraud prevention decisioning platform' },
        { name: 'Momentum Banking Suite', description: 'Integrated retail banking platform for branch and digital channels' }
      ],
      executives: [
        { name: 'Tim Spence', title: 'CEO & President', bio: 'Leading digital-first transformation strategy. Previously served as Chief Strategy Officer.' },
        { name: 'Bryan Preston', title: 'Chief Financial Officer', bio: 'Manages capital allocation and financial planning. Former Wells Fargo executive.' },
        { name: 'Jude Schramm', title: 'Chief Information Officer', bio: 'Modernizing technology infrastructure and leading cybersecurity initiatives.' },
        { name: 'Howard Hammond', title: 'Head of Consumer Banking', bio: 'Oversees retail banking, mortgage, and auto lending divisions.' },
        { name: 'Michael Faillo', title: 'Chief Digital Officer', bio: 'Driving digital innovation and fintech partnerships across the enterprise.' },
        { name: 'Maria Veltre', title: 'Chief Marketing Officer', bio: 'Leading brand transformation and customer acquisition strategies.' }
      ],
      financials: {
        totalRevenue: '$8.5 billion (+7% YoY)',
        netIncome: '$2.1 billion (+3% YoY)',
        operatingResult: '$3.2 billion',
        cashInvestments: '$45 billion',
        netAssets: '$211 billion',
        employees: '19,000+'
      },
      creditRatings: {
        amBest: 'Not Applicable',
        standardPoors: 'BBB+ (Stable)',
        moodys: 'Baa1 (Stable)'
      },
      news: [
        { title: 'Fifth Third Launches AI-Powered Small Business Lending Platform', date: 'August 1, 2025', url: '#' },
        { title: 'Q2 2025: Net Interest Income Up 9% Despite Rate Pressures', date: 'July 22, 2025', url: '#' },
        { title: 'Acquires Dividend Finance for $1.7B to Expand Green Lending', date: 'June 30, 2025', url: '#' },
        { title: 'Opens Innovation Center in Nashville Tech Hub', date: 'June 15, 2025', url: '#' },
        { title: 'Partners with Microsoft on Cloud Banking Transformation', date: 'May 20, 2025', url: '#' }
      ],
      strategicInitiatives: {
        livingHealth: {
          title: 'Digital Banking Excellence',
          items: [
            'Mobile-first platform development',
            'API banking for corporate clients',
            'Real-time payments infrastructure',
            'Embedded finance solutions'
          ]
        },
        partnerships: {
          title: 'Strategic Partnerships',
          items: [
            'Microsoft Azure cloud partnership',
            'Fintech accelerator program',
            'University banking alliances',
            'Green energy financing partners'
          ]
        },
        marketExpansion: {
          title: 'Geographic Expansion',
          items: [
            'Southeast market penetration',
            'Digital-only banking nationwide',
            'Commercial banking in new metros',
            'Wealth management growth'
          ]
        },
        technology: {
          title: 'Technology Modernization',
          items: [
            '$500M technology investment',
            'Core banking system upgrade',
            'AI/ML platform deployment',
            'Quantum-resistant security'
          ]
        }
      },
      references: [
        { title: 'Fifth Third Bank 2024 Annual Report', date: '2024', url: '#' },
        { title: 'Federal Reserve Bank Statistics', date: '2025', url: '#' },
        { title: 'American Banker: Digital Banking Study', date: '2025', url: '#' },
        { title: 'S&P Global Market Intelligence Report', date: 'March 2025', url: '#' }
      ]
    },
    3: { // Alaska Airlines
      id: '3',
      name: 'Alaska Airlines',
      description: 'Alaska Airlines is the fifth largest airline in the United States, operating a fleet of 300+ aircraft to 120+ destinations. Following its acquisition of Hawaiian Airlines, Alaska has strengthened its position as the premier carrier for West Coast travel.',
      industry: 'Airline Transportation',
      sub_industry: 'Airlines',
      headquarters: 'SeaTac, Washington',
      annual_revenue: 10400000000,
      employee_count: 30000,
      kpis: {
        memberBase: { value: '24M', label: 'Mileage Plan Members', trend: 'positive' },
        revenue: { value: '$10.4B', label: 'FY 2024 (+15% YoY)', trend: 'positive' },
        marketPresence: { value: '120+ Cities', label: 'US, Canada, Mexico', trend: 'positive' },
        ranking: { value: '#1', label: 'On-Time Performance', trend: 'positive' }
      },
      technologies: [
        { name: 'Amadeus Altéa Suite', description: 'Integrated passenger service system for reservations and operations' },
        { name: 'SITA WorldTracer', description: 'Advanced baggage tracking and recovery system with RFID integration' },
        { name: 'Panasonic Avionics', description: 'In-flight entertainment and connectivity platform' },
        { name: 'Datalex Digital Commerce', description: 'AI-powered retail merchandising and ancillary revenue platform' },
        { name: 'FlySmart Analytics', description: 'Proprietary operations optimization and predictive maintenance system' }
      ],
      executives: [
        { name: 'Ben Minicucci', title: 'CEO', bio: 'Leading post-merger integration with Hawaiian Airlines. 20+ year Alaska veteran.' },
        { name: 'Shane Tackett', title: 'CFO', bio: 'Managing financial strategy through industry recovery. Former Delta executive.' },
        { name: 'Constance von Muehlen', title: 'COO', bio: 'Overseeing operational excellence and customer experience initiatives.' },
        { name: 'Andrew Harrison', title: 'Chief Commercial Officer', bio: 'Driving revenue management and network planning strategies.' },
        { name: 'Charu Jain', title: 'SVP IT & CIO', bio: 'Leading technology transformation and digital innovation programs.' },
        { name: 'Diana Birkett Rakow', title: 'SVP Public Affairs & Sustainability', bio: 'Managing sustainability initiatives and stakeholder relations.' }
      ],
      financials: {
        totalRevenue: '$10.4 billion (+15% YoY)',
        netIncome: '$580 million (+45% YoY)',
        operatingResult: '$920 million',
        cashInvestments: '$2.9 billion',
        netAssets: '$4.2 billion',
        employees: '30,000+'
      },
      creditRatings: {
        amBest: 'Not Applicable',
        standardPoors: 'BB+ (Positive)',
        moodys: 'Ba1 (Stable)'
      },
      news: [
        { title: 'Alaska Airlines Completes Hawaiian Airlines Acquisition', date: 'August 2, 2025', url: '#' },
        { title: 'Launches New Premium Class on Transcontinental Routes', date: 'July 18, 2025', url: '#' },
        { title: 'Partners with Microsoft on Sustainable Aviation Fuel Initiative', date: 'June 25, 2025', url: '#' },
        { title: 'Opens New Maintenance Hub at Seattle-Tacoma Airport', date: 'June 10, 2025', url: '#' },
        { title: 'Announces Fleet Renewal with Boeing 737 MAX Order', date: 'May 15, 2025', url: '#' }
      ],
      strategicInitiatives: {
        livingHealth: {
          title: 'Customer Experience Innovation',
          items: [
            'Premium cabin refresh program',
            'Mobile app personalization',
            'Biometric boarding expansion',
            'Loyalty program enhancement'
          ]
        },
        partnerships: {
          title: 'Strategic Alliances',
          items: [
            'oneworld alliance integration',
            'Hawaiian Airlines merger synergies',
            'Microsoft technology partnership',
            'Sustainable fuel suppliers'
          ]
        },
        marketExpansion: {
          title: 'Network Expansion',
          items: [
            'Hawaii and Asia-Pacific growth',
            'Latin America route development',
            'Midwest hub strengthening',
            'International gateway focus'
          ]
        },
        technology: {
          title: 'Operational Excellence',
          items: [
            'Next-gen fleet investment',
            'Predictive maintenance AI',
            'Revenue management optimization',
            'Digital operations platform'
          ]
        }
      },
      references: [
        { title: 'Alaska Air Group 2024 Annual Report', date: '2024', url: '#' },
        { title: 'DOT Air Travel Consumer Report', date: '2025', url: '#' },
        { title: 'Aviation Week Network Analysis', date: '2025', url: '#' },
        { title: 'IATA Industry Statistics', date: 'March 2025', url: '#' }
      ]
    }
  };
  
  return mockData[companyId] || mockData['1'];
};

const mockClients = [
  { id: '1', name: 'Healthfirst', industry: 'Healthcare Insurance' },
  { id: '2', name: 'Fifth Third Bank', industry: 'Banking & Financial Services' },
  { id: '3', name: 'Alaska Airlines', industry: 'Airline Transportation' }
];

interface Client {
  id: string;
  name: string;
  industry: string;
}

interface Offering {
  id: number;
  agent_name: string;
  agent_type: string;
  department?: string;
  platform: string;
  categorization_l1: string;
  industry_vertical?: string;
  complexity_level?: string;
  is_deployed: boolean;
  description?: string;
  relevance_reason?: string;
  potential_impact?: string;
  key_capabilities?: string;
  integration_requirements?: string;
  priority_rank?: number;
  expected_roi?: string;
  estimated_cost?: string;
  time_to_deploy?: string;
  client_id?: string;
  client_name?: string;
  client_industry?: string;
}

// Agentic Offerings Tab Component with Database Integration
const AgenticOfferingsTab: React.FC<{ selectedClient: Client }> = ({ selectedClient }) => {
  const [activeOffering, setActiveOffering] = useState(0);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterDeployed, setFilterDeployed] = useState('all');
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [viewMode, setViewMode] = useState<'recommended' | 'all'>('recommended');
  
  // Get offerings based on view mode
  const offerings: Offering[] = viewMode === 'recommended' 
    ? clientAgentData.filter(agent => agent.client_id === selectedClient.id)
    : cnxInventoryData;
  
  // Get unique values for filters
  const departments = [...new Set(offerings.map(o => o.department).filter(d => d))];
  const platforms = [...new Set(offerings.map(o => o.platform))];
  const categories = [...new Set(offerings.map(o => o.categorization_l1))];
  
  // Filter offerings
  const filteredOfferings = offerings.filter(offering => {
    const deptMatch = filterDepartment === 'all' || offering.department === filterDepartment;
    const platformMatch = filterPlatform === 'all' || offering.platform === filterPlatform;
    const categoryMatch = filterCategory === 'all' || offering.categorization_l1 === filterCategory;
    const deployedMatch = filterDeployed === 'all' || 
                         (filterDeployed === 'deployed' && offering.is_deployed) ||
                         (filterDeployed === 'not-deployed' && !offering.is_deployed);
    return deptMatch && platformMatch && categoryMatch && deployedMatch;
  });
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // ROI Calculator Component
  const ROICalculator: React.FC<{ offering: Offering }> = ({ offering }) => (
    <div style={{
      backgroundColor: colors.white,
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      marginTop: '16px'
    }}>
      <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.navy, marginBottom: '16px' }}>
        ROI Calculator - {offering.agent_name}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '14px', color: colors.grayMedium }}>Initial Investment</label>
          <div style={{ fontSize: '24px', fontWeight: '600', color: colors.navy }}>
            {offering.estimated_cost?.split('+')[0] || 'Contact us'}
          </div>
        </div>
        <div>
          <label style={{ fontSize: '14px', color: colors.grayMedium }}>Annual Cost</label>
          <div style={{ fontSize: '24px', fontWeight: '600', color: colors.navy }}>
            {offering.estimated_cost?.split('+')[1] || 'N/A'}
          </div>
        </div>
        <div>
          <label style={{ fontSize: '14px', color: colors.grayMedium }}>Expected ROI</label>
          <div style={{ fontSize: '24px', fontWeight: '600', color: colors.success }}>
            {offering.expected_roi || 'TBD'}
          </div>
        </div>
        <div>
          <label style={{ fontSize: '14px', color: colors.grayMedium }}>Time to Deploy</label>
          <div style={{ fontSize: '24px', fontWeight: '600', color: colors.info }}>
            {offering.time_to_deploy || 'TBD'}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '16px', padding: '16px', backgroundColor: colors.grayLight, borderRadius: '8px' }}>
        <h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.navy, marginBottom: '8px' }}>
          Projected Impact
        </h4>
        <p style={{ fontSize: '14px', color: colors.grayDark }}>
          {offering.potential_impact || offering.description}
        </p>
      </div>
    </div>
  );

  return (
    <div style={{ padding: '24px' }}>
      {/* View Mode Toggle */}
      <div style={{ 
        display: 'flex', 
        gap: '0', 
        marginBottom: '24px',
        backgroundColor: colors.white,
        borderRadius: '12px',
        padding: '4px',
        width: 'fit-content',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
      }}>
        <button
          onClick={() => {
            setViewMode('recommended');
            setActiveOffering(0);
          }}
          style={{
            padding: '10px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            fontWeight: '600',
            fontSize: '14px',
            backgroundColor: viewMode === 'recommended' ? colors.primary : 'transparent',
            color: viewMode === 'recommended' ? colors.white : colors.navy
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={18} />
            Recommended for {selectedClient.name}
          </div>
        </button>
        <button
          onClick={() => {
            setViewMode('all');
            setActiveOffering(0);
          }}
          style={{
            padding: '10px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            fontWeight: '600',
            fontSize: '14px',
            backgroundColor: viewMode === 'all' ? colors.primary : 'transparent',
            color: viewMode === 'all' ? colors.white : colors.navy
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={18} />
            All Offerings
          </div>
        </button>
      </div>

      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', color: colors.navy, marginBottom: '8px' }}>
          {viewMode === 'recommended' 
            ? `AI Agent Recommendations for ${selectedClient.name}`
            : 'All Available AI Agents'}
        </h1>
        <p style={{ fontSize: '16px', color: colors.grayMedium, marginBottom: '16px' }}>
          {viewMode === 'recommended'
            ? 'Personalized recommendations based on industry and business needs'
            : 'Complete catalog of AI agent solutions across all industries'}
        </p>
        
        {/* Category Summary */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {categories.map(category => {
            const count = offerings.filter(o => o.categorization_l1 === category).length;
            return (
              <div
                key={category}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: colors.white,
                  border: `1px solid ${getCategoryColor(category)}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
                onClick={() => setFilterCategory(filterCategory === category ? 'all' : category)}
              >
                <div style={{ color: getCategoryColor(category) }}>
                  {getCategoryIcon(category)}
                </div>
                <span style={{ fontSize: '14px', fontWeight: '600', color: colors.navy }}>
                  {category}
                </span>
                <span style={{
                  padding: '2px 6px',
                  borderRadius: '12px',
                  backgroundColor: getCategoryColor(category),
                  color: colors.white,
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {count}
                </span>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: colors.success,
              color: colors.white,
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {offerings.filter(o => o.is_deployed).length} Deployed
            </div>
            <div style={{
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: colors.grayLight,
              color: colors.grayDark,
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {offerings.filter(o => !o.is_deployed).length} Available
            </div>
            <div style={{
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: colors.navy,
              color: colors.white,
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {offerings.length} Total Agents
            </div>
            {viewMode === 'all' && (
              <div style={{
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: colors.purple,
                color: colors.white,
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Cross-Industry Catalog
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ 
        display: 'flex', 
        gap: '16px', 
        marginBottom: '24px',
        padding: '16px',
        backgroundColor: colors.white,
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Filter size={20} color={colors.grayMedium} />
          <span style={{ fontSize: '14px', fontWeight: '600', color: colors.navy }}>Filter by:</span>
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: `1px solid ${colors.grayMedium}`,
            fontSize: '14px',
            color: colors.navy
          }}
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={filterDeployed}
          onChange={(e) => setFilterDeployed(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: `1px solid ${colors.grayMedium}`,
            fontSize: '14px',
            color: colors.navy
          }}
        >
          <option value="all">All Status</option>
          <option value="deployed">Deployed</option>
          <option value="not-deployed">Not Deployed</option>
        </select>
        <select
          value={filterDepartment}
          onChange={(e) => setFilterDepartment(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: `1px solid ${colors.grayMedium}`,
            fontSize: '14px',
            color: colors.navy
          }}
        >
          <option value="all">All Departments</option>
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
        <select
          value={filterPlatform}
          onChange={(e) => setFilterPlatform(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: `1px solid ${colors.grayMedium}`,
            fontSize: '14px',
            color: colors.navy
          }}
        >
          <option value="all">All Platforms</option>
          {platforms.map(platform => (
            <option key={platform} value={platform}>{platform}</option>
          ))}
        </select>
      </div>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '24px' }}>
        {/* Left Sidebar - Offerings List */}
        <div style={{ backgroundColor: colors.white, borderRadius: '12px', padding: '20px', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)', maxHeight: '80vh', overflow: 'auto' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: colors.navy, marginBottom: '16px' }}>
            {viewMode === 'recommended' ? 'Recommended AI Agents' : 'All AI Agents'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {filteredOfferings.map((offering, index) => (
              <div
                key={offering.id}
                onClick={() => setActiveOffering(index)}
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                  border: activeOffering === index ? `2px solid ${colors.primary}` : `1px solid ${colors.grayLight}`,
                  backgroundColor: activeOffering === index ? '#F0FFF9' : colors.white,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  if (activeOffering !== index) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = colors.grayLight;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeOffering !== index) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = colors.white;
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <Bot size={20} color={colors.primary} />
                      <span style={{ 
                        fontSize: '16px', 
                        fontWeight: '600', 
                        color: colors.navy 
                      }}>
                        {offering.agent_name}
                      </span>
                    </div>
                    {viewMode === 'all' && offering.industry_vertical && (
                      <div style={{ fontSize: '11px', color: colors.purple, marginBottom: '4px', fontWeight: '600' }}>
                        {offering.industry_vertical}
                      </div>
                    )}
                    {viewMode === 'recommended' && 'client_name' in offering && (
                      <div style={{ fontSize: '11px', color: colors.purple, marginBottom: '4px', fontWeight: '600' }}>
                        {offering.client_name}
                      </div>
                    )}
                    <div style={{ fontSize: '12px', color: colors.grayMedium, marginBottom: '8px' }}>
                      {offering.agent_type} • {offering.department || 'Cross-functional'}
                    </div>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '12px',
                        backgroundColor: getCategoryColor(offering.categorization_l1),
                        color: colors.white,
                        fontSize: '10px',
                        fontWeight: '500'
                      }}>
                        {offering.categorization_l1}
                      </span>
                      {viewMode === 'recommended' && offering.priority_rank && (
                        <span style={{
                          padding: '2px 8px',
                          borderRadius: '12px',
                          backgroundColor: colors.primary,
                          color: colors.white,
                          fontSize: '11px',
                          fontWeight: '500'
                        }}>
                          #{offering.priority_rank}
                        </span>
                      )}
                      {viewMode === 'all' && offering.complexity_level && (
                        <span style={{
                          padding: '2px 8px',
                          borderRadius: '12px',
                          backgroundColor: colors.info,
                          color: colors.white,
                          fontSize: '11px',
                          fontWeight: '500'
                        }}>
                          {offering.complexity_level}
                        </span>
                      )}
                      {offering.is_deployed && (
                        <span style={{
                          padding: '2px 8px',
                          borderRadius: '12px',
                          backgroundColor: colors.success,
                          color: colors.white,
                          fontSize: '11px',
                          fontWeight: '500'
                        }}>
                          ✓ Deployed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Offering Details */}
        {filteredOfferings[activeOffering] && (
          <div>
            {/* Offering Header Card */}
            <div style={{
              backgroundColor: colors.white,
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.navy }}>
                      {filteredOfferings[activeOffering].agent_name}
                    </h2>
                    {filteredOfferings[activeOffering].is_deployed && (
                      <span style={{
                        padding: '6px 16px',
                        borderRadius: '20px',
                        backgroundColor: colors.success,
                        color: colors.white,
                        fontSize: '14px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <CheckCircle size={16} />
                        Deployed
                      </span>
                    )}
                  </div>
                  {viewMode === 'all' && filteredOfferings[activeOffering].industry_vertical && (
                    <div style={{ fontSize: '14px', color: colors.purple, marginBottom: '8px', fontWeight: '600' }}>
                      Industry: {filteredOfferings[activeOffering].industry_vertical}
                    </div>
                  )}
                  {viewMode === 'recommended' && 'client_name' in filteredOfferings[activeOffering] && (
                    <div style={{ fontSize: '14px', color: colors.purple, marginBottom: '8px', fontWeight: '600' }}>
                      For {(filteredOfferings[activeOffering] as any).client_name} • {(filteredOfferings[activeOffering] as any).client_industry}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      backgroundColor: getCategoryColor(filteredOfferings[activeOffering].categorization_l1),
                      color: colors.white,
                      fontSize: '14px',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      {getCategoryIcon(filteredOfferings[activeOffering].categorization_l1)}
                      {filteredOfferings[activeOffering].categorization_l1}
                    </span>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      backgroundColor: colors.info,
                      color: colors.white,
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      {filteredOfferings[activeOffering].platform}
                    </span>
                    {filteredOfferings[activeOffering].department && (
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '16px',
                        backgroundColor: colors.grayDark,
                        color: colors.white,
                        fontSize: '14px',
                        fontWeight: '500'
                      }}>
                        {filteredOfferings[activeOffering].department}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setShowROICalculator(!showROICalculator)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    backgroundColor: colors.primary,
                    color: colors.white,
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <TrendingUp size={18} />
                  ROI Calculator
                </button>
              </div>

              {/* Key Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center', padding: '12px', backgroundColor: colors.grayLight, borderRadius: '8px' }}>
                  <DollarSign size={24} color={colors.success} style={{ margin: '0 auto 8px' }} />
                  <div style={{ fontSize: '12px', color: colors.grayMedium, marginBottom: '4px' }}>Investment</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: colors.navy }}>
                    {filteredOfferings[activeOffering].estimated_cost?.split('+')[0] || 'Contact us'}
                  </div>
                </div>
                <div style={{ textAlign: 'center', padding: '12px', backgroundColor: colors.grayLight, borderRadius: '8px' }}>
                  <TrendingUp size={24} color={colors.primary} style={{ margin: '0 auto 8px' }} />
                  <div style={{ fontSize: '12px', color: colors.grayMedium, marginBottom: '4px' }}>
                    {viewMode === 'recommended' ? 'Expected ROI' : 'Complexity'}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: colors.navy }}>
                    {viewMode === 'recommended' 
                      ? filteredOfferings[activeOffering].expected_roi || 'TBD'
                      : filteredOfferings[activeOffering].complexity_level || 'Medium'
                    }
                  </div>
                </div>
                <div style={{ textAlign: 'center', padding: '12px', backgroundColor: colors.grayLight, borderRadius: '8px' }}>
                  <Clock size={24} color={colors.info} style={{ margin: '0 auto 8px' }} />
                  <div style={{ fontSize: '12px', color: colors.grayMedium, marginBottom: '4px' }}>Time to Deploy</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: colors.navy }}>
                    {filteredOfferings[activeOffering].time_to_deploy || 'TBD'}
                  </div>
                </div>
                <div style={{ textAlign: 'center', padding: '12px', backgroundColor: colors.grayLight, borderRadius: '8px' }}>
                  {viewMode === 'recommended' ? (
                    <>
                      <Award size={24} color={colors.warning} style={{ margin: '0 auto 8px' }} />
                      <div style={{ fontSize: '12px', color: colors.grayMedium, marginBottom: '4px' }}>Priority Rank</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: colors.navy }}>
                        #{filteredOfferings[activeOffering].priority_rank || 'N/A'}
                      </div>
                    </>
                  ) : (
                    <>
                      <Building2 size={24} color={colors.purple} style={{ margin: '0 auto 8px' }} />
                      <div style={{ fontSize: '12px', color: colors.grayMedium, marginBottom: '4px' }}>Industry</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: colors.navy }}>
                        {filteredOfferings[activeOffering].industry_vertical || 'General'}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Why It's Relevant */}
              <div style={{ padding: '16px', backgroundColor: '#E8FAF6', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: colors.navy, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Target size={20} color={colors.primary} />
                  {viewMode === 'recommended' 
                    ? `Why This Matters for ${selectedClient.name}`
                    : 'Agent Description'
                  }
                </h3>
                <p style={{ fontSize: '14px', color: colors.grayDark, lineHeight: '1.6' }}>
                  {viewMode === 'recommended' 
                    ? filteredOfferings[activeOffering].relevance_reason
                    : filteredOfferings[activeOffering].description
                  }
                </p>
              </div>
            </div>

            {/* Show ROI Calculator if toggled */}
            {showROICalculator && <ROICalculator offering={filteredOfferings[activeOffering]} />}

            {/* Expandable Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Potential Impact / Key Features Section */}
              {(viewMode === 'recommended' || viewMode === 'all') && (
                <div style={{
                  backgroundColor: colors.white,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)'
                }}>
                  <div
                    onClick={() => toggleSection('impact')}
                    style={{
                      padding: '20px',
                      backgroundColor: expandedSections['impact'] ? colors.primary : colors.white,
                      color: expandedSections['impact'] ? colors.white : colors.navy,
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <BarChart3 size={24} />
                      <h3 style={{ fontSize: '18px', fontWeight: '600' }}>
                        {viewMode === 'recommended' ? 'Potential Business Impact' : 'Key Features'}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: expandedSections['impact'] ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s'
                      }}
                    />
                  </div>
                  {expandedSections['impact'] && (
                    <div style={{ padding: '20px' }}>
                      <p style={{ fontSize: '15px', color: colors.grayDark, lineHeight: '1.8' }}>
                        {viewMode === 'recommended' 
                          ? filteredOfferings[activeOffering].potential_impact
                          : filteredOfferings[activeOffering].description
                        }
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Key Capabilities Section */}
              <div style={{
                backgroundColor: colors.white,
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)'
              }}>
                <div
                  onClick={() => toggleSection('capabilities')}
                  style={{
                    padding: '20px',
                    backgroundColor: expandedSections['capabilities'] ? colors.primary : colors.white,
                    color: expandedSections['capabilities'] ? colors.white : colors.navy,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Zap size={24} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Key Capabilities</h3>
                  </div>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: expandedSections['capabilities'] ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }}
                  />
                </div>
                {expandedSections['capabilities'] && (
                  <div style={{ padding: '20px' }}>
                    {filteredOfferings[activeOffering].key_capabilities && (
                      <ul style={{ marginLeft: '20px' }}>
                        {filteredOfferings[activeOffering].key_capabilities!.split(',').map((capability, idx) => (
                          <li key={idx} style={{ fontSize: '14px', color: colors.grayDark, marginBottom: '8px' }}>
                            {capability.trim()}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              {/* Integration Requirements */}
              {(filteredOfferings[activeOffering].integration_requirements || 
                (viewMode === 'all' && filteredOfferings[activeOffering].key_capabilities)) && (
                <div style={{
                  backgroundColor: colors.white,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)'
                }}>
                  <div
                    onClick={() => toggleSection('integration')}
                    style={{
                      padding: '20px',
                      backgroundColor: expandedSections['integration'] ? colors.primary : colors.white,
                      color: expandedSections['integration'] ? colors.white : colors.navy,
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <GitBranch size={24} />
                      <h3 style={{ fontSize: '18px', fontWeight: '600' }}>
                        {viewMode === 'recommended' ? 'Integration Requirements' : 'Technical Details'}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: expandedSections['integration'] ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s'
                      }}
                    />
                  </div>
                  {expandedSections['integration'] && (
                    <div style={{ padding: '20px' }}>
                      <p style={{ fontSize: '14px', color: colors.grayDark, lineHeight: '1.6' }}>
                        {viewMode === 'recommended' 
                          ? filteredOfferings[activeOffering].integration_requirements
                          : filteredOfferings[activeOffering].key_capabilities
                        }
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AgenticSalesIntelligencePlatform: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<Client>(mockClients[0]);
  const [activeTab, setActiveTab] = useState('intelligence');
  const [searchQuery, setSearchQuery] = useState('');
  const [clientSubTab, setClientSubTab] = useState('overview');
  
  // Get current client data
  const companyData = getClientData(selectedClient.id);

  // Navigation items for client research
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'contacts', label: 'Key Contacts' },
    { id: 'financials', label: 'Financials' },
    { id: 'strategy', label: 'Strategic Moves' },
    { id: 'benchmarking', label: 'Benchmarking' },
    { id: 'references', label: 'References' }
  ];

  // Sidebar Component
  const Sidebar: React.FC = () => (
    <div style={{ width: '256px', height: '100%', backgroundColor: colors.navyLight }}>
      <div style={{ padding: '16px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: colors.primary }}>
          Agentic Sales Intelligence
        </h2>
        
        <div style={{ marginBottom: '24px' }}>
          <div style={{ position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '12px', width: '16px', height: '16px', color: colors.grayMedium }} />
            <input
              type="text"
              placeholder="Search clients..."
              style={{ 
                width: '100%',
                paddingLeft: '40px',
                paddingRight: '12px',
                paddingTop: '8px',
                paddingBottom: '8px',
                borderRadius: '4px',
                backgroundColor: colors.navy,
                color: colors.white,
                border: `1px solid ${colors.grayMedium}`
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {mockClients.filter(client => 
            client.name.toLowerCase().includes(searchQuery.toLowerCase())
          ).map(client => (
            <button
              key={client.id}
              onClick={() => {
                setSelectedClient(client);
                setClientSubTab('overview'); // Reset to overview when changing clients
              }}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '12px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: selectedClient.id === client.id ? colors.primary : 'transparent',
                color: selectedClient.id === client.id ? colors.navy : colors.white
              }}
            >
              <div style={{ fontWeight: '600' }}>{client.name}</div>
              <div style={{ fontSize: '14px', opacity: '0.75' }}>{client.industry}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Client Intelligence Tab with embedded dashboard
  const ClientIntelligenceTab: React.FC = () => (
    <div>
      {/* Sub-navigation for client research */}
      <div style={{ backgroundColor: colors.white, marginTop: '-24px', marginLeft: '-24px', marginRight: '-24px', marginBottom: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', gap: '24px', padding: '16px 24px', flexWrap: 'wrap' }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setClientSubTab(item.id)}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '12px',
                backgroundColor: clientSubTab === item.id ? '#3AC6AD' : 'transparent',
                color: clientSubTab === item.id ? colors.white : colors.navy,
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '400',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                if (clientSubTab !== item.id) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F5F5F5';
                }
              }}
              onMouseLeave={(e) => {
                if (clientSubTab !== item.id) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {clientSubTab === 'overview' && (
        <div>
          {/* Company Header */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#102340', marginBottom: '8px' }}>
              {companyData.name}
            </h1>
            <p style={{ fontSize: '16px', color: '#7D8793', lineHeight: '1.5' }}>{companyData.description}</p>
          </div>

          {/* KPI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.05)';
            }}>
              <Users size={32} style={{ margin: '0 auto 12px', color: '#3AC6AD' }} />
              <div style={{ fontSize: '13px', color: '#7D8793', marginBottom: '4px' }}>Member Base</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#3AC6AD', margin: '4px 0' }}>{companyData.kpis.memberBase.value}</div>
              <p style={{ fontSize: '13px', margin: '4px 0', color: '#102340' }}>{companyData.kpis.memberBase.label}</p>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', backgroundColor: '#5CB85C' }}></div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.05)';
            }}>
              <DollarSign size={32} style={{ margin: '0 auto 12px', color: '#3AC6AD' }} />
              <div style={{ fontSize: '13px', color: '#7D8793', marginBottom: '4px' }}>Annual Revenue</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#3AC6AD', margin: '4px 0' }}>{companyData.kpis.revenue.value}</div>
              <p style={{ fontSize: '13px', margin: '4px 0', color: '#102340' }}>{companyData.kpis.revenue.label}</p>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', backgroundColor: '#5CB85C' }}></div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.05)';
            }}>
              <Globe size={32} style={{ margin: '0 auto 12px', color: '#3AC6AD' }} />
              <div style={{ fontSize: '13px', color: '#7D8793', marginBottom: '4px' }}>Market Presence</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#3AC6AD', margin: '4px 0' }}>{companyData.kpis.marketPresence.value}</div>
              <p style={{ fontSize: '13px', margin: '4px 0', color: '#102340' }}>{companyData.kpis.marketPresence.label}</p>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', backgroundColor: '#5CB85C' }}></div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.05)';
            }}>
              <Award size={32} style={{ margin: '0 auto 12px', color: '#3AC6AD' }} />
              <div style={{ fontSize: '13px', color: '#7D8793', marginBottom: '4px' }}>Industry Ranking</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#3AC6AD', margin: '4px 0' }}>{companyData.kpis.ranking.value}</div>
              <p style={{ fontSize: '13px', margin: '4px 0', color: '#102340' }}>{companyData.kpis.ranking.label}</p>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', backgroundColor: '#5CB85C' }}></div>
            </div>
          </div>

          {/* Company Overview and News */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)'
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#102340', marginBottom: '16px' }}>Company Overview</h2>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#102340' }}>{companyData.description}</p>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#102340', marginTop: '16px' }}>
                Headquartered in {companyData.headquarters}, the organization has established itself as a leader in the {companyData.industry.toLowerCase()} sector, 
                consistently delivering innovative solutions and maintaining strong customer satisfaction metrics across all service channels.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#102340', marginTop: '16px' }}>
                As the industry rapidly evolves toward digital-first experiences and AI-driven operations, {companyData.name}'s 
                substantial technology investments and integrated business model position it uniquely for continued growth and transformation.
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: '500', color: '#102340', marginBottom: '16px' }}>Latest News - August 2025</h3>
              <div>
                {companyData.news.map((item: any, index: number) => (
                  <div key={index} style={{
                    padding: '16px 0',
                    borderBottom: index < companyData.news.length - 1 ? '1px solid #E1E4EA' : 'none'
                  }}>
                    <a href={item.url} style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#102340',
                      textDecoration: 'none',
                      lineHeight: '1.4',
                      display: 'block',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#3AC6AD';
                      (e.currentTarget as HTMLElement).style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#102340';
                      (e.currentTarget as HTMLElement).style.textDecoration = 'none';
                    }}>
                      {item.title}
                    </a>
                    <span style={{ fontSize: '12px', color: '#7D8793', marginTop: '4px', display: 'block' }}>{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other sub-tabs with basic content */}
      {clientSubTab === 'technologies' && (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)'
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#102340', marginBottom: '16px' }}>Contact Center Technologies & AI Solutions</h2>
            {companyData.technologies.map((tech: any, index: number) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px',
                borderRadius: '12px',
                border: '1px solid #E1E4EA',
                marginBottom: '12px',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#3AC6AD';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#E1E4EA';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#F4F7FA',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px',
                  flexShrink: 0
                }}>
                  <MessageSquare size={20} color="#102340" />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontWeight: '600', marginBottom: '4px', color: '#102340' }}>{tech.name}</div>
                  <div style={{ fontSize: '14px', color: '#7D8793' }}>{tech.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
              marginBottom: '16px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: '500', color: '#102340', marginBottom: '12px' }}>AI & Digital Investment</h3>
              <p style={{ fontSize: '16px', fontWeight: '600', color: '#102340', marginBottom: '12px' }}>$100M+ Annual AI Investment</p>
              <p style={{ fontSize: '14px', color: '#7D8793', marginBottom: '16px' }}>
                {companyData.name} has committed over $100 million annually to artificial intelligence and digital transformation initiatives, focusing on:
              </p>
              <ul style={{ marginLeft: '20px', marginBottom: '16px' }}>
                <li style={{ fontSize: '14px', color: '#102340' }}>Generative AI tools for employees</li>
                <li style={{ fontSize: '14px', color: '#102340' }}>Predictive analytics for operations</li>
                <li style={{ fontSize: '14px', color: '#102340' }}>Automated customer service</li>
                <li style={{ fontSize: '14px', color: '#102340' }}>Digital-first experiences</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: '500', color: '#102340', marginBottom: '12px' }}>Technology Partnerships</h3>
              <p style={{ fontSize: '16px', fontWeight: '600', color: '#102340', marginBottom: '12px' }}>Strategic Partners:</p>
              <ul style={{ marginLeft: '20px' }}>
                <li style={{ fontSize: '14px', color: '#102340' }}>Google Cloud (6-year agreement)</li>
                <li style={{ fontSize: '14px', color: '#102340' }}>Microsoft Azure</li>
                <li style={{ fontSize: '14px', color: '#102340' }}>Amazon Web Services</li>
                <li style={{ fontSize: '14px', color: '#102340' }}>Salesforce</li>
                <li style={{ fontSize: '14px', color: '#102340' }}>ServiceNow</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Add other sub-tabs with placeholder content */}
      {clientSubTab !== 'overview' && clientSubTab !== 'technologies' && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#102340', marginBottom: '16px' }}>
            {navItems.find(item => item.id === clientSubTab)?.label} for {companyData.name}
          </h2>
          <p style={{ fontSize: '16px', color: '#7D8793' }}>
            Detailed {clientSubTab} information for {companyData.name} will be displayed here. This section provides comprehensive insights and data relevant to the selected category.
          </p>
          <div style={{ marginTop: '24px', padding: '20px', backgroundColor: '#F4F7FA', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#102340', marginBottom: '12px' }}>Coming Soon</h3>
            <p style={{ fontSize: '14px', color: '#102340' }}>
              This section is being enhanced with comprehensive data and insights. Please check back soon for updated content.
            </p>
          </div>
        </div>
      )}
    </div>
  );

  // Placeholder Tab Components
  const UseCasesTab: React.FC = () => (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px' }}>
        <div style={{ textAlign: 'center' }}>
          <Target size={64} color={colors.grayMedium} style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: colors.navy }}>
            Use Cases
          </h2>
          <p style={{ color: colors.grayMedium, fontSize: '16px', marginBottom: '20px' }}>
            Proven AI implementations and success stories from your industry
          </p>
          <div style={{ 
            padding: '20px',
            backgroundColor: colors.white,
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
            maxWidth: '600px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: colors.navy, marginBottom: '12px' }}>
              Coming Soon
            </h3>
            <p style={{ fontSize: '14px', color: colors.grayDark, lineHeight: '1.6' }}>
              Explore real-world use cases and implementation examples from companies in your industry. 
              Learn from success stories, best practices, and lessons learned from AI transformations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const SalesGuidesTab: React.FC = () => (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px' }}>
        <div style={{ textAlign: 'center' }}>
          <FileText size={64} color={colors.grayMedium} style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: colors.navy }}>
            Sales Guides
          </h2>
          <p style={{ color: colors.grayMedium, fontSize: '16px', marginBottom: '20px' }}>
            Comprehensive sales resources and client engagement materials
          </p>
          <div style={{ 
            padding: '20px',
            backgroundColor: colors.white,
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
            maxWidth: '600px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: colors.navy, marginBottom: '12px' }}>
              Coming Soon
            </h3>
            <p style={{ fontSize: '14px', color: colors.grayDark, lineHeight: '1.6' }}>
              Access comprehensive sales guides, pitch decks, competitive analysis, and client engagement strategies. 
              Everything you need to successfully position AI solutions to your clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ height: '100vh', display: 'flex', backgroundColor: colors.grayLight }}>
      <Sidebar />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '24px', paddingRight: '24px', backgroundColor: colors.navyLight }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {['intelligence', 'offerings', 'usecases', 'guides'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontWeight: activeTab === tab ? '600' : '400',
                  backgroundColor: activeTab === tab ? colors.primary : 'transparent',
                  color: colors.white
                }}
              >
                {tab === 'intelligence' && 'Client Intelligence'}
                {tab === 'offerings' && 'Agentic Offerings'}
                {tab === 'usecases' && 'Use Cases'}
                {tab === 'guides' && 'Sales Guides'}
              </button>
            ))}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={{ 
              padding: '8px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              transition: 'all 0.3s'
            }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}>
              <Settings style={{ width: '20px', height: '20px', color: colors.white }} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ccc' }} />
              <span style={{ fontSize: '14px', color: colors.white }}>Sales Team</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, overflow: 'auto', padding: '24px' }}>
          {activeTab === 'intelligence' && <ClientIntelligenceTab />}
          {activeTab === 'offerings' && <AgenticOfferingsTab selectedClient={selectedClient} />}
          {activeTab === 'usecases' && <UseCasesTab />}
          {activeTab === 'guides' && <SalesGuidesTab />}
        </div>
      </div>
    </div>
  );
};

export default AgenticSalesIntelligencePlatform;