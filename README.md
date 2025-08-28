# Agentic Sales Intelligence Platform

A comprehensive AI-powered sales intelligence platform that helps sales teams understand their clients, identify opportunities, and accelerate deal closure through intelligent insights and automated workflows.

## 🚀 Features

### 🧠 Client Intelligence
- **Company Overview**: Comprehensive client profiles with KPIs, financials, and strategic insights
- **Technology Stack Analysis**: Current tech stack and AI investment tracking
- **Key Contacts**: Executive profiles and decision maker information
- **Financial Health**: Revenue, growth metrics, and credit ratings
- **Strategic Initiatives**: Market expansion plans and technology investments
- **Industry Benchmarking**: Competitive analysis and market positioning
- **Research References**: Curated sources and latest company news

### 🤖 Agentic Offerings (Coming Soon)
- Personalized AI agent recommendations based on client industry and needs
- Implementation roadmaps and ROI calculators
- Integration requirements and technical specifications
- Priority ranking based on business impact

### 📊 Use Cases (Coming Soon)
- Industry-specific AI implementation examples
- Proven success stories and best practices
- Implementation timelines and expected outcomes
- Success metrics and KPI tracking

### 📚 Sales Guides (Coming Soon)
- Comprehensive sales materials and pitch decks
- Competitive analysis and positioning guides
- Client engagement strategies and conversation starters
- Technical deep-dives and implementation guides

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **React Router** for navigation
- **Redux Toolkit** for state management
- **React Query** for server state management
- **Lucide React** for icons
- **Tailwind CSS** for styling

### Backend Integration
- **Firebase** for authentication and data storage
- **PostgreSQL** with pgVector for advanced analytics
- **RESTful APIs** for external data integration

### Key Components
```
src/
├── components/
│   ├── AgenticSalesIntelligencePlatform.tsx  # Main dashboard component
│   ├── auth/
│   │   └── PrivateRoute.tsx                  # Route protection
│   └── common/
│       └── LoadingSpinner.tsx                # Loading states
├── contexts/
│   ├── AuthContext.tsx                       # Authentication management
│   ├── FirebaseContext.tsx                   # Firebase integration
│   └── ThemeContext.tsx                      # Theme management
├── pages/
│   └── Login.tsx                            # Authentication page
└── store/
    └── store.ts                             # Redux store configuration
```

## 🎯 Current Status

### ✅ Implemented
- **Client Intelligence Tab**: Full implementation with rich client data for:
  - Healthfirst (Healthcare Insurance)
  - Fifth Third Bank (Banking & Financial Services)  
  - Alaska Airlines (Airline Transportation)
- **Navigation Structure**: Complete tab-based navigation system
- **Authentication**: Basic auth flow with demo bypass
- **Responsive Design**: Mobile-friendly interface with modern styling

### 🚧 In Development
- **Agentic Offerings**: AI agent recommendation engine
- **Use Cases**: Industry-specific implementation examples
- **Sales Guides**: Comprehensive sales enablement materials
- **Data Integration**: Real-time client data feeds
- **Advanced Analytics**: Predictive insights and trend analysis

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DataandAI1/Agentic_Sales_Intelligence_Platform.git
   cd Agentic_Sales_Intelligence_Platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Demo Access
For quick access, use the "Demo Access (Skip Login)" button on the login page to bypass authentication and explore the platform.

## 📊 Client Data

The platform currently includes comprehensive data for three demo clients:

### Healthfirst (Healthcare Insurance)
- 1.8M members across NYC and Long Island
- $14.2B annual revenue
- Leading Medicaid provider in New York
- Focus on digital transformation and AI initiatives

### Fifth Third Bank (Banking & Financial Services)
- 8.7M retail customers across 11 states
- $8.5B annual revenue
- #12 US bank by assets
- Emphasis on digital banking and fintech partnerships

### Alaska Airlines (Airline Transportation)
- 24M Mileage Plan members
- $10.4B annual revenue
- #1 on-time performance ranking
- Recent Hawaiian Airlines acquisition

## 🛠️ Development

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App
- `npm run firebase:deploy` - Deploy to Firebase

### Code Structure
The application follows a modular architecture with clear separation of concerns:

- **Components**: Reusable UI components organized by feature
- **Contexts**: React contexts for global state management
- **Pages**: Route-level components
- **Services**: API integration and business logic
- **Store**: Redux store and slice definitions
- **Types**: TypeScript type definitions

### Styling
The platform uses a modern design system with:
- **Primary Color**: #00D4AA (Teal)
- **Navy Theme**: #0A1628 for navigation and headers
- **Clean Typography**: Modern, readable font hierarchy
- **Card-based Layout**: Information organized in digestible cards
- **Responsive Design**: Mobile-first approach

## 🚀 Deployment

### Firebase Hosting
The platform is configured for Firebase hosting:

```bash
npm run firebase:deploy
```

### Environment Configuration
Configure your environment variables:
- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- Database connection strings for PostgreSQL

## 📈 Roadmap

### Phase 1: Foundation (Current)
- ✅ Client Intelligence dashboard
- ✅ Authentication and navigation
- ✅ Responsive design system

### Phase 2: AI Recommendations
- 🚧 Agentic offerings engine
- 🚧 ROI calculators
- 🚧 Implementation roadmaps

### Phase 3: Use Cases & Guides
- 📋 Industry-specific use cases
- 📋 Sales enablement materials
- 📋 Competitive analysis tools

### Phase 4: Advanced Features
- 📋 Real-time data integration
- 📋 Predictive analytics
- 📋 Advanced reporting
- 📋 CRM integration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support

For support and questions:
- 📧 Email: dataandaiinnovations@gmail.com
- 💬 Create an issue in this repository
- 📱 Contact the development team

---

**Built with ❤️ for sales teams who want to leverage AI for better client relationships and faster deal closure.**