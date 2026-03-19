import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all">
      <Quote className="w-10 h-10 text-accent mb-4" />
      <p className="text-gray-700 mb-6 italic leading-relaxed">{quote}</p>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-[#0A2540] font-['Poppins']">{author}</p>
        <p className="text-muted-foreground text-sm">{role}</p>
      </div>
    </div>
  );
}
