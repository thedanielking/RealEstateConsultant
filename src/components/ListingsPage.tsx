import React, { useState } from 'react';
import { PropertyCard } from './PropertyCard';
import { Filter } from 'lucide-react';
import { Button } from './Button';

interface ListingsPageProps {
  onNavigate: (page: string)=> void;
}

export function ListingsPage({onNavigate}: ListingsPageProps) {
  const [selectedType, setSelectedType] = useState('all');

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwbW9kZXJuJTIwaG91c2V8ZW58MXx8fHwxNzY5Nzg5OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Luxury Villa',
      location: 'Maitama, Abuja',
      price: '₦550,000,000',
      type: 'For Sale'
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
      price: '₦250,000,000',
      type: 'For Sale'
    },
    {
      id: 4,
      image: 'https://plus.unsplash.com/premium_photo-1733306523667-80d5e5668631?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Luxury Villa With Swimming Pool',
      location: 'Asokoro, Abuja',
      price: '₦1,585,000,000',
      type: 'For Sale'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1760611655987-d348d6d28174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2OTcwMzA2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury High-Rise Condo',
      location: 'Lekki Phase 1, Lagos',
      price: '₦895,000,000',
      type: 'Investment'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1598635031829-4bfae29d33eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9uJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY5Njk2NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Estate Mansion',
      location: 'Gwarinpa, Abuja',
      price: '₦720,000,000',
      type: 'For Sale'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1630361138957-a5d7f88b2d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWFjaCUyMGhvdXNlfGVufDF8fHx8MTc2OTc5MDA0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Beachfront Modern Home',
      location: 'Banana Island, Lagos',
      price: '₦850,000,000',
      type: 'For Sale'
    },
    {
      id: 8,
      image: '/house.jpg',
      title: 'Duplex House',
      location: 'Wuse 2, Abuja',
      price: '₦245,000,000',
      type: 'Investment'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1694702702714-a48c5fabdaf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTcwMzA1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Commercial Office Building',
      location: 'Central Business District, Abuja',
      price: '₦1,200,000,000',
      type: 'Investment'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTcwMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Joint Venture(Video)',
      location: 'Maitama, Abuja',
      price: '₦450,000,000',
      type: 'For Sale',
      video: '/videos/jointVenture.mp4'
    },
  ];

  const filteredProperties = selectedType === 'all' 
    ? properties 
    : properties.filter(prop => prop.type === selectedType);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwbW9kZXJuJTIwaG91c2V8ZW58MXx8fHwxNzY5Nzg5OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080')` 
          }}
        />
        <div className="absolute inset-0 bg-[#0A2540]/80" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl mb-4 font-['Poppins'] font-bold">
            Property Portfolio
          </h1>
          <p className="text-xl text-gray-200">
            Discover Premium Properties for Sale and Investment
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center text-[#0A2540] font-['Poppins'] font-semibold">
              <Filter className="w-5 h-5 mr-2" />
              Filter by:
            </div>
            <button
              onClick={() => setSelectedType('all')}
              className={`px-6 py-2 rounded-lg transition-all ${
                selectedType === 'all'
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Properties
            </button>
            <button
              onClick={() => setSelectedType('For Sale')}
              className={`px-6 py-2 rounded-lg transition-all ${
                selectedType === 'For Sale'
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setSelectedType('Investment')}
              className={`px-6 py-2 rounded-lg transition-all ${
                selectedType === 'Investment'
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Investment Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-[#0A2540]">{filteredProperties.length}</span> properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-6 font-['Poppins'] font-bold">
            Looking for Something Specific?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I have access to exclusive off-market properties and can help you find exactly what you're looking for
          </p>
          <Button variant="accent" size="lg" 
          onClick= {()=> onNavigate("contact")}>
            Contact Me About Your Requirements
          </Button>
        </div>
      </section>
    </div>
  );
}