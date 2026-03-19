import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all group">
      <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
        <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl mb-3 text-[#0A2540] font-['Poppins'] font-semibold">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
