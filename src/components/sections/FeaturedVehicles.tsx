import React from 'react';
import VehicleCard from '../ui/VehicleCard';
import { Vehicle } from '../../types';

const featuredVehicles: Vehicle[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&q=80',
    brand: 'BMW',
    model: 'Série 3',
    year: 2023,
    price: 45900,
    mileage: '10.000 km',
    fuel: 'Diesel',
    transmission: 'Automática',
    power: '190cv',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80',
    brand: 'Mercedes',
    model: 'CLA',
    year: 2022,
    price: 52900,
    mileage: '15.000 km',
    fuel: 'Gasolina',
    transmission: 'Automática',
    power: '224cv',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80',
    brand: 'Audi',
    model: 'A4',
    year: 2023,
    price: 48900,
    mileage: '8.000 km',
    fuel: 'Diesel',
    transmission: 'Automática',
    power: '204cv',
  },
];

export default function FeaturedVehicles() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Viaturas em Destaque</h2>
          <a href="/viaturas" className="text-[#1a1a1a] font-medium hover:underline">
            Ver todas as viaturas
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}