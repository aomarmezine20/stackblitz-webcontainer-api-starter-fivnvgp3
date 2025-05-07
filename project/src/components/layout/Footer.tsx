import { Link } from 'react-router-dom';
import { Tv, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-800 pt-12 pb-6 z-10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-primary-500">
              <Tv size={24} />
              <span className="text-lg font-display font-bold tracking-wide">
                FutureIPTV
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Premium IPTV subscription service with thousands of channels and VOD content. Enjoy your favorite shows and movies anywhere.
            </p>
            <div className="flex mt-6 space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-base mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-medium text-base mb-4">Features</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">HD & 4K Quality</li>
              <li className="text-gray-400 text-sm">10,000+ Live Channels</li>
              <li className="text-gray-400 text-sm">Video On Demand</li>
              <li className="text-gray-400 text-sm">Multi-device Support</li>
              <li className="text-gray-400 text-sm">24/7 Customer Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={16} className="text-primary-500 mt-1 mr-2" />
                <span className="text-gray-400 text-sm">support@futureiptv.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="text-primary-500 mt-1 mr-2" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-primary-500 mt-1 mr-2" />
                <span className="text-gray-400 text-sm">
                  1234 Stream Avenue, Suite 567<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} FutureIPTV. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            All trademarks, logos, and brand names are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;