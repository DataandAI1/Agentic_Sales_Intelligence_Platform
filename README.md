# Agentic Sales Intelligence Platform

## Overview
AI-powered sales intelligence platform for Concentrix Agentic offerings that helps sales teams identify opportunities, position solutions, and access relevant sales assets.

## Features
- **Content Management**: Manage services, use cases, case studies, and sales assets
- **Client Intelligence**: AI-powered client analysis and opportunity scoring
- **Sales Guide Generation**: Automated creation of personalized sales guides
- **AgentiX OS™ Visualization**: Interactive framework visualization
- **Real-time Collaboration**: Live editing and collaboration features

## Architecture

### Data Storage
- **PostgreSQL (agentic_sales schema)**: Structured data, relationships, vector embeddings for semantic search
- **Firebase Firestore**: Document storage, real-time collaboration, version history
- **Cloud Storage**: Media files, large documents, attachments

### Key Technologies
- **Frontend**: React 18, TypeScript, Redux Toolkit
- **Backend**: PostgreSQL with pgvector extension
- **Real-time**: Firebase Firestore & Realtime Database
- **Search**: Vector embeddings for semantic search
- **Auth**: Firebase Authentication

## Project Structure
```
src/
├── components/     # Reusable UI components
├── services/       # API and Firebase services
├── hooks/          # Custom React hooks
├── store/          # Redux store and slices
├── types/          # TypeScript type definitions
├── pages/          # Main application pages
└── utils/          # Helper functions
```

## Getting Started

### Prerequisites
- Node.js 16+
- PostgreSQL 14+ with pgvector extension
- Firebase project with Firestore enabled

### Installation
```bash
# Clone the repository
git clone https://github.com/DataandAI1/Agentic_Sales_Intelligence_Platform.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
npm run db:migrate

# Start development server
npm start
```

### Environment Variables
```
REACT_APP_POSTGRES_CONNECTION_STRING=postgresql://user:password@localhost:5432/agentic_sales
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

## Database Schema
The PostgreSQL schema includes:
- Services, Use Cases, Case Studies, Assets
- Client Intelligence and scoring
- User management and permissions
- Workflow management (drafts, approvals)
- Vector embeddings for semantic search

See `/database/schema.sql` for complete schema.

## Firebase Collections
- `content_versions`: Document versions and history
- `collaboration_sessions`: Real-time collaboration
- `media_library`: Media file metadata
- `templates`: Content templates
- `drafts_autosave`: Auto-saved drafts

## Deployment

### Firebase Deployment
```bash
npm run build
firebase deploy
```

### Docker Deployment
```bash
docker-compose up -d
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Proprietary - Concentrix Corporation

## Support
For issues or questions, contact the development team.