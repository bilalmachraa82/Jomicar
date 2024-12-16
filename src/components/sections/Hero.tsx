import React from 'react';
import VehicleSearch from './VehicleSearch';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Encontre o Seu Carro Ideal
        </h1>
        <VehicleSearch />
      </div>
    </div>
  );
}