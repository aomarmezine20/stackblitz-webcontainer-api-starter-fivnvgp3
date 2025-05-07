import { ChevronRight, Tv, Zap, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative pt-24 pb-20 overflow-hidden sm:pt-32 sm:pb-24">
      {/* Animated background elements */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-flex items-center rounded-full bg-dark-800 px-3 py-1 text-sm text-primary-400 border border-dark-700">
            <span className="font-medium">New Features Released</span>
            <ChevronRight size={16} className="ml-1 text-primary-500" />
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
            The Future of TV <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">is Here</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience limitless entertainment with premium IPTV services. Access thousands of channels, movies, and shows from around the world on any device.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/pricing">
              <Button size="lg" rightIcon={<ChevronRight size={16} />}>
                View Plans
              </Button>
            </Link>
            <Link to="/register?trial=true">
              <Button size="lg" variant="outline">
                Start Free Trial
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-400"
          >
            <div className="flex items-center">
              <Tv size={18} className="text-primary-500 mr-2" />
              <span>10,000+ Live Channels</span>
            </div>
            <div className="flex items-center">
              <Zap size={18} className="text-primary-500 mr-2" />
              <span>HD & 4K Quality</span>
            </div>
            <div className="flex items-center">
              <Globe size={18} className="text-primary-500 mr-2" />
              <span>Watch on Any Device</span>
            </div>
            <div className="flex items-center">
              <Shield size={18} className="text-primary-500 mr-2" />
              <span>99.9% Uptime</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Device Mockup */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="aspect-[16/9] relative overflow-hidden rounded-xl border border-dark-700 bg-dark-800 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 overflow-hidden">
                {/* TV screen content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/3938465/pexels-photo-3938465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Streaming content preview" 
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                  
                  {/* Channel interface overlay */}
                  <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <Tv size={20} className="text-primary-500" />
                      <span className="ml-2 text-white font-medium text-sm">FutureIPTV</span>
                    </div>
                    <div className="text-white text-sm">Live</div>
                  </div>
                </div>
              </div>
              
              {/* Reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-40"></div>
              
              {/* TV screen glare */}
              <div className="absolute -top-[300%] -right-[100%] w-[500%] h-[500%] bg-white/5 rotate-45 transform"></div>
            </div>
            
            {/* Devices below the TV */}
            <div className="mt-6 flex justify-center gap-6">
              <div className="w-16 h-8 bg-dark-800 rounded-lg border border-dark-700 shadow-md"></div>
              <div className="w-6 h-8 bg-dark-800 rounded-lg border border-dark-700 shadow-md"></div>
              <div className="w-12 h-8 bg-dark-800 rounded-lg border border-dark-700 shadow-md"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;