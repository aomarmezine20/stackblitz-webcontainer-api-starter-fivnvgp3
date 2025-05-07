import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is FutureIPTV?',
    answer: 'FutureIPTV is a premium IPTV service that provides access to thousands of live TV channels, movies, and TV shows from around the world. Our service offers high-quality streaming with support for multiple devices.',
  },
  {
    question: 'What devices can I use?',
    answer: 'Our service works on most devices including Smart TVs, Android boxes, iOS devices, Android phones/tablets, computers, and MAG devices. We provide detailed setup guides for all supported devices.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 24-hour free trial so you can test our service before subscribing. No credit card is required for the trial period.',
  },
  {
    question: 'What is the streaming quality?',
    answer: 'We offer streams in various qualities including SD, HD, Full HD (1080p), and 4K Ultra HD (depending on your subscription plan and the original source quality).',
  },
  {
    question: 'How many devices can I use simultaneously?',
    answer: 'The number of concurrent streams depends on your subscription plan. Our basic plan supports 2 devices, while premium plans support up to 4 concurrent streams.',
  },
  {
    question: 'Do you provide customer support?',
    answer: 'Yes, we offer 24/7 customer support through live chat, email, and our ticket system. Our technical team is always ready to help you with any issues.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and cryptocurrency payments. All transactions are secure and encrypted.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or hidden fees.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            Frequently Asked <span className="text-primary-500">Questions</span>
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find answers to common questions about our service. Can't find what you're looking for?{' '}
            <a href="/contact" className="text-primary-500 hover:text-primary-400">Contact us</a>.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-lg bg-dark-800 border ${
                  openIndex === index ? 'border-primary-500' : 'border-dark-700'
                } hover:border-primary-500/50 transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-primary-500" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-400"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}