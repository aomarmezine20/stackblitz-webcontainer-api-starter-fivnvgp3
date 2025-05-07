import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import Button from '../components/ui/Button';

const plans = [
  {
    name: 'Monthly',
    price: 19.99,
    duration: 'month',
    features: [
      'Access to 5,000+ Live Channels',
      'HD Quality Streaming',
      'Video on Demand Library',
      '2 Concurrent Streams',
      'EPG (Electronic Program Guide)',
      '24/7 Customer Support',
    ],
    notIncluded: [
      '4K Ultra HD Quality',
      'Premium Sports Channels',
      'Multi-device Support',
    ],
  },
  {
    name: 'Quarterly',
    price: 49.99,
    duration: '3 months',
    popular: true,
    features: [
      'Access to 8,000+ Live Channels',
      'HD & FHD Quality Streaming',
      'Extensive VOD Library',
      '3 Concurrent Streams',
      'EPG (Electronic Program Guide)',
      'Premium Sports Channels',
      '24/7 Priority Support',
      'Multi-device Support',
    ],
    notIncluded: ['4K Ultra HD Quality'],
  },
  {
    name: 'Yearly',
    price: 159.99,
    duration: 'year',
    features: [
      'Access to 10,000+ Live Channels',
      'HD, FHD & 4K Quality',
      'Complete VOD Library',
      '4 Concurrent Streams',
      'EPG (Electronic Program Guide)',
      'All Premium Channels',
      '24/7 VIP Support',
      'Multi-device Support',
      'Custom Channel Requests',
    ],
    notIncluded: [],
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen py-24 bg-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Choose Your <span className="text-primary-500">Plan</span>
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Select the perfect plan for your entertainment needs. All plans include our core features and premium content.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl bg-dark-800 border ${
                plan.popular ? 'border-primary-500' : 'border-dark-700'
              } p-8 shadow-xl hover:border-primary-500/50 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-dark-900 text-sm font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-display font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.duration}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center text-gray-300">
                    <Check size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div key={feature} className="flex items-center text-gray-500">
                    <X size={20} className="text-gray-600 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to={`/checkout/${plan.name.toLowerCase()}`} className="block">
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            All plans include a 24-hour free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}