import React from 'react';
import { Euro } from 'lucide-react';
import { Vehicle } from '../../types';
import Button from './Button';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {vehicle.brand} {vehicle.model}
        </h3>
        <div className="space-y-2 text-gray-600">
          <p>Ano: {vehicle.year}</p>
          <p>Quilómetros: {vehicle.mileage}</p>
          <p>Combustível: {vehicle.fuel}</p>
          {vehicle.transmission && <p>Caixa: {vehicle.transmission}</p>}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Euro size={20} className="text-[#1a1a1a]" />
            <span className="text-xl font-bold text-[#1a1a1a]">
              {vehicle.price.toLocaleString()}
            </span>
          </div>
          <Button variant="primary">Ver Detalhes</Button>
        </div>
      </div>
    </div>
  );
}