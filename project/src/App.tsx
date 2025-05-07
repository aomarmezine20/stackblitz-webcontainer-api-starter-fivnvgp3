import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/ui/LoadingScreen';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminRoute from './components/auth/AdminRoute';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="checkout/:planId" element={<CheckoutPage />} />
          </Route>
          
          {/* Admin routes */}
          <Route element={<AdminRoute />}>
            <Route path="admin/*" element={<AdminDashboardPage />} />
          </Route>
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;