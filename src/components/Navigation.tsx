import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'listings', label: 'Listings' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];
  const phoneNumber = "+2348139048448";

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const handleCall = () => {
    // Redirects the browser to the call application
    window.location.href = `tel:${phoneNumber}`;
  };


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-lg font-['Poppins'] font-bold text-[#0A2540]"
          >
            Becomeabuja<span className="text-accent">landlord</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors cursor-pointer ${
                  currentPage === item.id
                    ? 'text-accent font-semibold'
                    : 'text-gray-700 hover:text-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="accent" size="sm">
              <Phone className="w-4 h-4 mr-2" />
                <a href={`tel:${phoneNumber}`} className="hover:underline">
                Call Now
                </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0A2540]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 transition-colors cursor-pointer ${
                    currentPage === item.id
                      ? 'text-accent font-semibold'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button variant="accent" size="sm" className="w-full cursor-pointer">
                <Phone className="w-4 h-4 mr-2" />
                <a href={`tel:${phoneNumber}`} className="hover:underline">
                Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}