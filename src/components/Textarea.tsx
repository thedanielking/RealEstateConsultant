import React from 'react';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  required?: boolean;
  name?: string;
  rows?: number;
}

export function Textarea({ 
  placeholder, 
  value, 
  onChange, 
  className = '',
  required = false,
  name,
  rows = 4
}: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      rows={rows}
      className={`w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-vertical ${className}`}
    />
  );
}
