import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export default function RegisterPage() {
  const [searchParams] = useSearchParams();
  const isTrial = searchParams.get('trial') === 'true';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await register(name, email, password);
      if (isTrial) {
        navigate('/dashboard?trial=active');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 relative z-10"
      >
        <div>
          <h2 className="text-center text-4xl font-display font-bold text-white">
            Create Account
          </h2>
          <p className="mt-3 text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-500 hover:text-primary-400 font-medium">
              Sign in
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="flex items-center p-4 text-error-500 bg-error-500/10 rounded-lg">
              <AlertCircle size={20} className="mr-2" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={20} className="text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none relative block w-full px-12 py-3 bg-dark-800 border border-dark-700 placeholder-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none relative block w-full px-12 py-3 bg-dark-800 border border-dark-700 placeholder-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-12 py-3 bg-dark-800 border border-dark-700 placeholder-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 bg-dark-800 border-dark-700 rounded text-primary-500 focus:ring-primary-500 focus:ring-offset-dark-900"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
              I agree to the{' '}
              <Link to="/terms" className="text-primary-500 hover:text-primary-400">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-primary-500 hover:text-primary-400">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            isLoading={isLoading}
          >
            {isTrial ? 'Start Free Trial' : 'Create Account'}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}