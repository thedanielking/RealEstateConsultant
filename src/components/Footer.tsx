import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-['Poppins'] font-bold mb-4">
              Becomeabuja<span className="text-accent">landlord</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in real estate. Helping buyers and investors secure profitable properties for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('listings')}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Property Listings
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Buyer Representation</li>
              <li className="text-gray-300">Property Sourcing</li>
              <li className="text-gray-300">Investment Consulting</li>
              <li className="text-gray-300">Market Analysis</li>
              <li className="text-gray-300">Portfolio Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">+234 813-904-8488</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">yahayabilikisu28@yahoo.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Abuja & Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Becomeabujualandlord. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}