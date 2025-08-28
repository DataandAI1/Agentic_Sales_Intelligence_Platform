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
  Edit3
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
  const AgenticOfferingsTab: React.FC = () => (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px' }}>
        <div style={{ textAlign: 'center' }}>
          <Bot size={64} color={colors.grayMedium} style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: colors.navy }}>
            Agentic Offerings
          </h2>
          <p style={{ color: colors.grayMedium, fontSize: '16px', marginBottom: '20px' }}>
            AI agent recommendations and implementations tailored to your business
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
              Discover personalized AI agent recommendations based on your industry, business needs, and technology stack. 
              This section will include detailed implementation guides, ROI calculators, and integration roadmaps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

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
          {activeTab === 'offerings' && <AgenticOfferingsTab />}
          {activeTab === 'usecases' && <UseCasesTab />}
          {activeTab === 'guides' && <SalesGuidesTab />}
        </div>
      </div>
    </div>
  );
};

export default AgenticSalesIntelligencePlatform;