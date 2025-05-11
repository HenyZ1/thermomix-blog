// src/app/components/PhoneWidget.tsx
"use client";
import { useState } from 'react';

interface PhoneWidgetProps {
  phoneNumber: string;
}

export default function PhoneWidget({ phoneNumber }: PhoneWidgetProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="position-fixed bottom-0 end-0 m-4"
      style={{ zIndex: 1050 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="phone-tooltip">
          <span>{phoneNumber}</span>
        </div>
      )}
      
      <a 
        href={`tel:${phoneNumber}`} 
        className="phone-btn"
      >
        <div className="phone-pulse"></div>
        <i className="bi bi-telephone-fill"></i>
      </a>
    </div>
  );
}