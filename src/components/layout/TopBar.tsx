import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../../constants/contact';

export default function TopBar() {
  return (
    <div className="bg-[#1a1a1a] text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors">
              <Phone size={16} />
              <span>{contactInfo.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors">
              <Mail size={16} />
              <span>{contactInfo.email}</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{contactInfo.address}</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Clock size={16} />
              <span>{contactInfo.workingHours[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}