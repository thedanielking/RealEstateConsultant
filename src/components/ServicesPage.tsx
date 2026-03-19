import React from 'react';
import { Home, Search, BarChart3, TrendingUp, Users, FileText, Calculator, Shield } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { Button } from './Button';

interface ServicesPageProps{
  onNavigate?: (page: string) => void;
}

export function ServicesPage({onNavigate}: ServicesPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb25kbyUyMGludGVyaW9yfGVufDF8fHx8MTc2OTc5MDAxNXww&ixlib=rb-4.1.0&q=80&w=1080')` 
          }}
        />
        <div className="absolute inset-0 bg-[#0A2540]/80" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl mb-4 font-['Poppins'] font-bold">
            Services
          </h1>
          <p className="text-xl text-gray-200">
            Comprehensive Real Estate Solutions Tailored to Your Goals
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4 text-[#0A2540] font-['Poppins'] font-bold">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From property search to closing and beyond, I provide expert guidance at every step of your real estate journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ServiceCard
              icon={Home}
              title="Buyer Representation"
              description="Navigate the home buying process with confidence. I represent your interests, negotiate the best terms, and ensure you secure the perfect property at the right price. From initial search to final walkthrough, I'm with you every step of the way."
            />
            <ServiceCard
              icon={Search}
              title="Property Sourcing"
              description="Get access to exclusive off-market listings and investment opportunities. I leverage my extensive network and market knowledge to find properties that match your exact criteria, often before they hit the public market."
            />
            <ServiceCard
              icon={BarChart3}
              title="Investment Consulting"
              description="Make informed investment decisions with comprehensive market analysis and ROI projections. I help investors identify high-potential properties, optimize their portfolios, and develop long-term wealth-building strategies."
            />
            <ServiceCard
              icon={TrendingUp}
              title="Market Analysis"
              description="Stay ahead of market trends with detailed research and insights. I provide comprehensive market reports, comparative market analysis, and trend forecasting to help you make strategic decisions."
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4 text-[#0A2540] font-['Poppins'] font-bold">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to streamline your real estate experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Users}
              title="Relocation Services"
              description="Smooth transitions for professionals and families relocating to new areas with personalized support."
            />
            <ServiceCard
              icon={FileText}
              title="Verify Property Documents"
              description="Thorough property inspections, title searches, and verification to protect your investment."
            />
            <ServiceCard
              icon={Calculator}
              title="Financial Planning"
              description="Connect with trusted mortgage advisors and explore financing options tailored to your situation such as helping to pay ground rent. "
            />
            <ServiceCard
              icon={Shield}
              title="Portfolio Management"
              description="Ongoing support for investors managing multiple properties and growing their portfolios."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4 text-[#0A2540] font-['Poppins'] font-bold">
              How I Work With You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-['Poppins'] font-bold">
                1
              </div>
              <h3 className="text-xl mb-3 text-[#0A2540] font-['Poppins'] font-semibold">
                Initial Consultation
              </h3>
              <p className="text-gray-600">
                Understanding your goals, budget, and timeline through a comprehensive discussion
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-['Poppins'] font-bold">
                2
              </div>
              <h3 className="text-xl mb-3 text-[#0A2540] font-['Poppins'] font-semibold">
                Strategy Development
              </h3>
              <p className="text-gray-600">
                Creating a customized plan based on market analysis and your specific needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-['Poppins'] font-bold">
                3
              </div>
              <h3 className="text-xl mb-3 text-[#0A2540] font-['Poppins'] font-semibold">
                Property Search
              </h3>
              <p className="text-gray-600">
                Identifying and viewing properties that match your criteria and offer the best value
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-['Poppins'] font-bold">
                4
              </div>
              <h3 className="text-xl mb-3 text-[#0A2540] font-['Poppins'] font-semibold">
                Closing & Beyond
              </h3>
              <p className="text-gray-600">
                Negotiating terms, managing paperwork, and providing ongoing support after closing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-6 font-['Poppins'] font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how I can help you achieve your real estate goals
          </p>
          <Button variant="accent" size="lg" onClick={()=> onNavigate("contact")}>
            Schedule Your Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
