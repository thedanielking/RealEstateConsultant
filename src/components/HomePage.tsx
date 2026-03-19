import React, { useState } from 'react';
import { Award, TrendingUp, Users, Shield, Home, Search, BarChart3, Headphones, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { PropertyCard } from './PropertyCard';
import { TestimonialCard } from './TestimonialCard';
import { ServiceCard } from './ServiceCard';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const featuredProperties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwbW9kZXJuJTIwaG91c2V8ZW58MXx8fHwxNzY5Nzg5OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Luxury Villa',
      location: 'Maitama, Abuja',
      price: '₦450,000,000',
      type: 'For Sale',
      video: '/videos/modern-luxury-villa.mp4'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Duplex Luxury Home',
      location: 'Victoria Island, Lagos',
      price: '₦380,000,000',
      type: 'Investment'
    },
    {
      id: 3,
      image: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Modern Apartment Exterior',
      location: 'Ikoyi, Lagos',
      price: '₦650,000,000',
      type: 'For Sale'
    }
  ];

  const testimonials = [
    {
      quote: "Working with this consultant was a game-changer for my investment portfolio. Their market insights and professionalism helped me identify a property that has already appreciated by 18% in just one year.",
      author: "Michael Chen",
      role: "Property Investor"
    },
    {
      quote: "From the first consultation to closing, the experience was seamless. They understood exactly what I was looking for and found my dream home within my budget. Highly recommended!",
      author: "Sarah Thompson",
      role: "Homebuyer"
    },
    {
      quote: "The level of expertise and attention to detail is unmatched. They guided me through every step of my first investment property purchase and made the process stress-free.",
      author: "David Rodriguez",
      role: "First-Time Investor"
    }
  ];

  return (
    <div className="min-h-screen scroll-">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwbW9kZXJuJTIwaG91c2V8ZW58MXx8fHwxNzY5Nzg5OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080')` 
          }}
        />
        <div className="absolute inset-0 bg-[#0A2540]/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl mb-6 font-['Poppins'] font-bold">
            Helping Buyers and Investors<br />Secure Profitable Properties
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
            Expert guidance in real estate investment and property acquisition with proven results and personalized service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              <a href="#consultation">Book a Consultation</a>
            </Button>
            <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-[#0A2540]">
              <a href="#listings">View Listings</a> 
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-4xl mb-2 text-accent font-['Poppins'] font-bold">15+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-4xl mb-2 text-accent font-['Poppins'] font-bold">₦500M+</h3>
              <p className="text-gray-600">Properties Handled</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-4xl mb-2 text-accent font-['Poppins'] font-bold">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-[#F5F7FA]" id='listings'>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4 text-[#0A2540] font-['Poppins'] font-bold">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked premium properties for discerning buyers and smart investors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                image={property.image}
                title={property.title}
                location={property.location}
                price={property.price}
                type={property.type}
                video={property.video}
                onInquire={() => onNavigate("contact")}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" onClick={() => onNavigate('listings')}>
              View All Listings <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4 text-[#0A2540] font-['Poppins'] font-bold">
              Why Choose Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unparalleled expertise and commitment to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl mb-3 text-[#0A2540] font-['Poppins'] font-semibold">
                Market Expertise
              </h3>
              <p className="text-gray-600">
                Deep understanding of local markets and emerging investment opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl mb-3 text-[#0A2540] font-['Poppins'] font-semibold">
                Investor-Focused
              </h3>
              <p className="text-gray-600">
                Data-driven advice to maximize ROI and build wealth through real estate
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl mb-3 text-[#0A2540] font-['Poppins'] font-semibold">
                Verified Properties
              </h3>
              <p className="text-gray-600">
                Thoroughly vetted listings with complete due diligence and transparency
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl mb-3 text-[#0A2540] font-['Poppins'] font-semibold">
                End-to-End Support
              </h3>
              <p className="text-gray-600">
                Comprehensive assistance from property search to closing and beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4 text-[#0A2540] font-['Poppins'] font-bold">
              Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Home}
              title="Buyer Representation"
              description="Expert guidance throughout your home buying journey, ensuring you secure the best property at the right price."
            />
            <ServiceCard
              icon={Search}
              title="Property Sourcing"
              description="Access to exclusive off-market properties and investment opportunities tailored to your criteria."
            />
            <ServiceCard
              icon={BarChart3}
              title="Investment Consulting"
              description="Strategic advice on property investment, portfolio diversification, and wealth building through real estate."
            />
            <ServiceCard
              icon={TrendingUp}
              title="Market Analysis"
              description="In-depth market research and trends analysis to inform your buying and investment decisions."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4 text-[#0A2540] font-['Poppins'] font-bold">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from clients who achieved their real estate goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-[#0A2540]" id='consultation'>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-accent md:text-5xl mb-4 font-['Poppins'] font-bold">
              Get Free Consultation
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss your real estate goals and find the perfect property for you
            </p>
          </div>
          <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#0A2540] mb-2">Full Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="block text-[#0A2540] mb-2">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-[#0A2540] mb-2">Phone Number</label>
              <Input
                type="tel"
                name="phone"
                placeholder="+2347029103921 "
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#0A2540] mb-2">Message</label>
              <Textarea
                name="message"
                placeholder="Tell us about your property needs or investment goals..."
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
              />
            </div>
            <Button type="submit" variant="accent" size="lg" className="w-full">
              Request Free Consultation
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}