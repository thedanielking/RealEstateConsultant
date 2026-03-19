import { Award, Target, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from './Button';

interface AboutPageProps{
  onNavigate: (page: string)=> void; 
}

export function AboutPage({onNavigate}: AboutPageProps) {
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
          <h1 className="text-4xl md:text-6xl mb-4 font-['Poppins'] font-bold">
            About Me
          </h1>
          <p className="text-xl text-gray-200">
            Your Trusted Partner in Real Estate Success
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk3NzkxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Real Estate Consultant"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl mb-6 text-[#0A2540] font-['Poppins'] font-bold">
                Experience You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of experience in the real estate industry, I have helped hundreds of buyers and investors achieve their property goals in Abuja and Lagos. My approach combines deep market knowledge, strategic thinking, and personalized service to ensure every client makes informed decisions.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I specialize in working with property investors and discerning buyers who value expert guidance and proven results. From first-time homebuyers to seasoned investors building portfolios, I provide the expertise and support needed to navigate Abuja and Lagos's competitive markets.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My commitment goes beyond closing deals—I build lasting relationships by delivering exceptional value and maintaining the highest standards of professionalism and integrity.
              </p>
              <Button variant="accent" size="lg" onClick={()=> onNavigate("contact")}>
                Schedule a Consultation
              </Button>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-[#F5F7FA] rounded-lg p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl mb-4 text-[#0A2540] font-['Poppins'] font-semibold">
                Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Committed to delivering the highest quality service and exceeding client expectations in every transaction.
              </p>
            </div>
            <div className="bg-[#F5F7FA] rounded-lg p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl mb-4 text-[#0A2540] font-['Poppins'] font-semibold">
                Results-Driven
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Focused on achieving measurable outcomes and maximizing value for every client investment.
              </p>
            </div>
            <div className="bg-[#F5F7FA] rounded-lg p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl mb-4 text-[#0A2540] font-['Poppins'] font-semibold">
                Integrity
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Operating with complete transparency and honesty in all client interactions and business practices.
              </p>
            </div>
          </div>

          {/* Markets Served */}
          <div className="bg-[#0A2540] text-white rounded-lg p-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl mb-4 font-['Poppins'] font-bold">
                Markets & Regions Served
              </h2>
              <p className="text-xl text-gray-300">
                Expert knowledge of premier real estate markets in Nigeria's capital cities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 font-['Poppins'] text-lg">Abuja</h4>
                  <p className="text-gray-300 text-sm">Maitama, Asokoro, Wuse 2, Gwarinpa, Central Business District, Jabi, Katampe, Apo, Guzape, Jahi</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 font-['Poppins'] text-lg">Lagos</h4>
                  <p className="text-gray-300 text-sm">Victoria Island, Ikoyi, Lekki Phase 1, Banana Island, Ikeja GRA, Parkview Estate, Ajah, Sangotedo, Chevron</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-6 text-[#0A2540] font-['Poppins'] font-bold">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss your goals and create a customized strategy for your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button variant="primary" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}