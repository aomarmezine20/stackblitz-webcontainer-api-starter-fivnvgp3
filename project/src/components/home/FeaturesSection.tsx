import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tv, Globe, Clock, Zap, Smartphone, Lock } from 'lucide-react';

const features = [
  {
    icon: <Tv size={24} />,
    title: '10,000+ Live Channels',
    description: 'Access thousands of international channels from sports to entertainment and news.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Content',
    description: 'Enjoy content from around the world with channels from over 50 countries and regions.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Video On Demand',
    description: 'Massive library of movies and TV shows available whenever you want to watch.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Ultra HD Quality',
    description: 'Crystal clear streaming with support for HD, Full HD, and 4K Ultra HD content.',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Multi-device Support',
    description: 'Watch on your TV, computer, tablet, smartphone, or any IPTV-compatible device.',
  },
  {
    icon: <Lock size={24} />,
    title: 'Secure Connection',
    description: 'Encrypted streaming connections keep your viewing habits private and secure.',
  },
];

const FeaturesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Why Choose <span className="text-primary-500">FutureIPTV</span>
          </h2>
          <p className="text-gray-400">
            Experience premium entertainment with cutting-edge features designed for the most demanding viewers.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-800 border border-dark-700 rounded-lg p-6 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="bg-dark-700 w-12 h-12 rounded-lg flex items-center justify-center text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;