import React from 'react';
import { Euro } from 'lucide-react';

export default function FeaturedCars() {
  const cars = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&q=80',
      brand: 'BMW',
      model: 'Série 3',
      year: 2023,
      price: 45900,
      mileage: '10.000 km',
      fuel: 'Diesel',
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
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Viaturas em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {car.brand} {car.model}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Ano: {car.year}</p>
                  <p>Quilómetros: {car.mileage}</p>
                  <p>Combustível: {car.fuel}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Euro size={20} className="text-[#1a1a1a]" />
                    <span className="text-xl font-bold text-[#1a1a1a]">
                      {car.price.toLocaleString()}
                    </span>
                  </div>
                  <button className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md hover:bg-[#333] transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}