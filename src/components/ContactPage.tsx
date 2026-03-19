import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { Textarea } from './Textarea';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    alert('Thank you for your message! I will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/15551234567', '_blank');
  };

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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-200">
            Let's Start Your Real Estate Journey Together
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6 text-[#0A2540] font-['Poppins'] font-bold">
                Send Me a Message
              </h2>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#0A2540] mb-2">Full Name *</label>
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
                  <label className="block text-[#0A2540] mb-2">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#0A2540] mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+2348139048448"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#0A2540] mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Property Inquiry"
                    value={formData.subject}
                    onChange={handleFormChange}
                  />
                </div>
                <div>
                  <label className="block text-[#0A2540] mb-2">Message *</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your real estate needs..."
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" variant="accent" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6 text-[#0A2540] font-['Poppins'] font-bold">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to find your dream property or make a smart investment in Abuja or Lagos? Get in touch with me today. I'm available for consultations, property viewings, and any questions you may have.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1 font-['Poppins']">Phone</h3>
                    <p className="text-gray-600">+2348139048448</p>
                    <p className="text-sm text-gray-500 mt-1">Available Mon-Sat, 9 AM - 7 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1 font-['Poppins']">Email</h3>
                    <p className="text-gray-600">contact@realestateexpert.com</p>
                    <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1 font-['Poppins']">Office Locations</h3>
                    <p className="text-gray-600">Abuja & Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1 font-['Poppins']">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 5:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="bg-[#F5F7FA] rounded-lg p-6">
                <h3 className="text-xl mb-3 text-[#0A2540] font-['Poppins'] font-semibold">
                  Quick Contact
                </h3>
                <p className="text-gray-600 mb-4">
                  Need an immediate response? Message me on WhatsApp for fastest replies.
                </p>
                <Button 
                  // variant="accent" 
                  size="lg" 
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0 bg-white">
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Map Location</p>
            <p className="text-gray-500 text-sm">Interactive map would be displayed here</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-6 text-[#0A2540] font-['Poppins'] font-bold">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step towards achieving your real estate goals. Book a no-obligation consultation to discuss your needs and explore opportunities.
          </p>
          {/* <Button variant="primary" size="lg">
            Book Consultation Now
          </Button> */}
        </div>
      </section>
    </div>
  );
}