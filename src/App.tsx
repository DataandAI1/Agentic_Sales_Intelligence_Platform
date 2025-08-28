import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { FirebaseProvider } from './contexts/FirebaseContext';
import LoadingSpinner from './components/common/LoadingSpinner';
import PrivateRoute from './components/auth/PrivateRoute';

// Import the main dashboard component
import AgenticSalesIntelligencePlatform from './components/AgenticSalesIntelligencePlatform';

// Lazy load pages
const Login = lazy(() => import('./pages/Login'));

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
                      <Route path="/" element={<Navigate to="/dashboard" replace />} />
                      <Route path="/dashboard" element={<AgenticSalesIntelligencePlatform />} />
                      <Route path="*" element={<AgenticSalesIntelligencePlatform />} />
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