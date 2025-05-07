import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Download, Monitor, Headphones } from 'lucide-react';

const steps = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'Choose a Plan',
    description: 'Select from our flexible subscription plans that fit your viewing habits and budget.',
  },
  {
    icon: <Download className="w-8 h-8" />,
    title: 'Get Your Access',
    description: 'Receive your login credentials instantly after payment via email.',
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Start Watching',
    description: 'Set up the service on your preferred device and start streaming immediately.',
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: '24/7 Support',
    description: 'Our customer support team is always available to help with any questions.',
  },
];

const HowItWorksSection = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            How <span className="text-primary-500">It Works</span>
          </h2>
          <p className="text-gray-400">
            Getting started with FutureIPTV is quick and easy. Follow these simple steps to begin your premium streaming experience.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] right-0 h-px bg-gradient-to-r from-primary-500 to-transparent"></div>
              )}
              
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6 text-center hover:border-primary-500/50 transition-all duration-300 relative z-10 h-full flex flex-col items-center">
                <div className="relative mb-5">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-md"></div>
                  <div className="w-16 h-16 bg-dark-800 rounded-full border border-primary-500 flex items-center justify-center text-primary-500 relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-dark-900 rounded-full border border-primary-500 flex items-center justify-center text-primary-500 text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;