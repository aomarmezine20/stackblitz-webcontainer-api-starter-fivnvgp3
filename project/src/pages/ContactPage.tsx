import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Implement form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen py-24 bg-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in <span className="text-primary-500">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 hover:border-primary-500/50 transition-all duration-300">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-primary-500 mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-gray-400">support@futureiptv.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-500 mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-primary-500 mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-medium">Address</h3>
                    <p className="text-gray-400">
                      1234 Stream Avenue, Suite 567<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 hover:border-primary-500/50 transition-all duration-300">
              <h2 className="text-2xl font-display font-bold text-white mb-4">Business Hours</h2>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 8:00 PM EST</p>
                <p>Saturday: 10:00 AM - 6:00 PM EST</p>
                <p>Sunday: 12:00 PM - 5:00 PM EST</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-800 border border-dark-700 rounded-lg p-8"
          >
            <h2  className="text-2xl font-display font-bold text-white mb-6">Send us a Message</h2>

            {error && (
              <div className="flex items-center p-4 mb-6 text-error-500 bg-error-500/10 rounded-lg">
                <AlertCircle size={20} className="mr-2" />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="flex items-center p-4 mb-6 text-success-500 bg-success-500/10 rounded-lg">
                <AlertCircle size={20} className="mr-2" />
                <span>Message sent successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                isLoading={isLoading}
                rightIcon={<Send size={16} />}
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}