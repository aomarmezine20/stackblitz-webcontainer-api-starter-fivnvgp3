import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Layout = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-dark-900 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none z-0"></div>
      
      {/* Animated gradient orbs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      
      <Navbar />
      
      <motion.main 
        className="flex-grow z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isPageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Layout;