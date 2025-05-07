import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Tv, Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  // Close mobile menu on location change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicking outside of user menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#user-menu') && !target.closest('#user-menu-button')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/80 backdrop-blur-md border-b border-dark-700' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-primary-500">
            <Tv size={28} className="text-primary-500" />
            <span className="text-xl font-display font-bold tracking-wide">
              FutureIPTV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-400 ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  id="user-menu-button"
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <span className="text-sm font-medium">{user?.name}</span>
                  <div className="w-8 h-8 bg-dark-700 rounded-full flex items-center justify-center text-primary-500">
                    <User size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      id="user-menu"
                      className="absolute right-0 mt-2 w-48 bg-dark-800 rounded-md shadow-lg border border-dark-700 overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="py-1">
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-white"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Dashboard
                        </Link>
                        {user?.role === 'admin' && (
                          <Link
                            to="/admin"
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-white"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            Admin Panel
                          </Link>
                        )}
                        <Link
                          to="/account"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-white"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Account Settings
                        </Link>
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-white"
                          onClick={() => {
                            logout();
                            setIsUserMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <LogOut size={14} />
                            <span>Sign Out</span>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Get Started</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-dark-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-dark-800 border-t border-dark-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 space-y-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    location.pathname === link.path
                      ? 'text-primary-500 bg-dark-700'
                      : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-2 border-t border-dark-700">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-dark-700 hover:text-white rounded-md"
                    >
                      Dashboard
                    </Link>
                    {user?.role === 'admin' && (
                      <Link
                        to="/admin"
                        className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-dark-700 hover:text-white rounded-md"
                      >
                        Admin Panel
                      </Link>
                    )}
                    <button
                      className="w-full flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:bg-dark-700 hover:text-white rounded-md"
                      onClick={logout}
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link to="/login">
                      <Button variant="outline" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;