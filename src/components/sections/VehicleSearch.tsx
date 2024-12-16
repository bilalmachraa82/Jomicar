import React from 'react';
import { Search } from 'lucide-react';
import Button from '../ui/Button';

export default function VehicleSearch() {
  return (
    <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]">
          <option value="">Marca</option>
          <option value="bmw">BMW</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]">
          <option value="">Modelo</option>
        </select>
        <Button icon={Search}>Pesquisar</Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]">
          <option value="">Preço Mínimo</option>
        </select>
        <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]">
          <option value="">Preço Máximo</option>
        </select>
        <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]">
          <option value="">Quilómetros</option>
        </select>
        <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]">
          <option value="">Combustível</option>
        </select>
      </div>
    </div>
  );
}