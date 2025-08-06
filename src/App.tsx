import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { FirebaseProvider } from './contexts/FirebaseContext';
import Layout from './components/common/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import PrivateRoute from './components/auth/PrivateRoute';

// Lazy load pages
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ContentManagement = lazy(() => import('./pages/ContentManagement'));
const ClientIntelligence = lazy(() => import('./pages/ClientIntelligence'));
const SalesGuides = lazy(() => import('./pages/SalesGuides'));
const AgentiXFramework = lazy(() => import('./pages/AgentiXFramework'));
const Analytics = lazy(() => import('./pages/Analytics'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <FirebaseProvider>
          <AuthProvider>
            <ThemeProvider>
              <Router>
                <Suspense fallback={<LoadingSpinner size="large" message="Loading..." />}>
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                      <Route element={<Layout />}>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/content/*" element={<ContentManagement />} />
                        <Route path="/intelligence/*" element={<ClientIntelligence />} />
                        <Route path="/guides/*" element={<SalesGuides />} />
                        <Route path="/agentix/*" element={<AgentiXFramework />} />
                        <Route path="/analytics/*" element={<Analytics />} />
                      </Route>
                    </Route>
                  </Routes>
                </Suspense>
              </Router>
            </ThemeProvider>
          </AuthProvider>
        </FirebaseProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;