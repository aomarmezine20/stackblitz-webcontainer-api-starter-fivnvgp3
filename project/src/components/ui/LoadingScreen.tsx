import { Tv } from 'lucide-react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-900">
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2
          }}
          className="mb-4"
        >
          <Tv size={48} className="text-primary-500" />
        </motion.div>
        
        <motion.div 
          className="text-2xl font-display font-bold tracking-wider text-primary-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          FutureIPTV
        </motion.div>
        
        <div className="w-48 h-1 bg-dark-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <motion.p 
          className="mt-4 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Loading your premium streaming experience...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;