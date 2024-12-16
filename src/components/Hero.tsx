import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Encontre o Seu Carro Ideal
        </h1>
        <div className="max-w-3xl bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="w-full p-3 border rounded-md">
              <option>Marca</option>
              <option>BMW</option>
              <option>Mercedes</option>
              <option>Audi</option>
            </select>
            <select className="w-full p-3 border rounded-md">
              <option>Modelo</option>
            </select>
            <button className="bg-[#1a1a1a] text-white p-3 rounded-md flex items-center justify-center space-x-2 hover:bg-[#333] transition-colors">
              <Search size={20} />
              <span>Pesquisar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}