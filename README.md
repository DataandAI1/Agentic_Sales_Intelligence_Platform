# Agentic Sales Intelligence Platform

A comprehensive React-based platform for managing Concentrix's Agentic AI sales enablement, combining PostgreSQL for structured data with Firebase for real-time collaboration and document storage.

## Features

- **Content Management**: Manage services, use cases, case studies, and sales assets
- **Client Intelligence**: AI-powered client analysis and opportunity scoring
- **Sales Guide Generation**: Automated, personalized sales materials
- **AgentiX OS Framework**: Visual framework management
- **Real-time Collaboration**: Live editing and presence indicators
- **Vector Search**: Semantic similarity search using pgvector
- **Analytics Dashboard**: Performance metrics and insights

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **State Management**: Redux Toolkit, React Query
- **Database**: PostgreSQL with pgvector extension
- **Document Store**: Firebase Firestore
- **Storage**: Firebase Cloud Storage
- **Authentication**: Firebase Auth
- **Real-time**: Firestore real-time listeners
- **Charts**: Recharts
- **Icons**: Lucide React

## Prerequisites

- Node.js 18+
- PostgreSQL 14+ with pgvector extension
- Firebase project configured
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/DataandAI1/Agentic_Sales_Intelligence_Platform.git
cd Agentic_Sales_Intelligence_Platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Set up PostgreSQL database:
```bash
# Install pgvector extension
CREATE EXTENSION vector;

# Run migrations
npm run db:migrate

# Seed initial data
npm run db:seed
```

5. Configure Firebase:
```bash
firebase init
# Select Firestore, Storage, Hosting, Functions
```

## Development

Start the development server:
```bash
npm start
```

The application will be available at http://localhost:3000

## Database Schema

The application uses a hybrid architecture:
- **PostgreSQL**: Structured data, relationships, vector embeddings
- **Firestore**: Documents, real-time collaboration, media metadata
- **Cloud Storage**: File storage, media assets

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── services/        # API and service layers
│   ├── api/        # REST API calls
│   ├── database/   # PostgreSQL client
│   ├── firebase/   # Firebase services
│   └── sync/       # Data synchronization
├── store/          # Redux store and slices
├── hooks/          # Custom React hooks
├── contexts/       # React contexts
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── styles/         # CSS and styling
```

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run firebase:deploy` - Deploy to Firebase

## Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
npm run firebase:deploy
```

## CI/CD

The project includes GitHub Actions workflow for automated deployment to Firebase on push to main branch.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

Proprietary - Concentrix Corporation

## Support

For support, please contact the development team or create an issue in the repository.