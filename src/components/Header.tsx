import React from 'react';
import { Phone, Mail, MapPin, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full">
      <div className="bg-[#1a1a1a] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+351219673561" className="flex items-center space-x-2 text-sm">
              <Phone size={16} />
              <span>+351 219 673 561</span>
            </a>
            <a href="mailto:geral@jomicar.pt" className="flex items-center space-x-2 text-sm">
              <Mail size={16} />
              <span>geral@jomicar.pt</span>
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin size={16} />
            <span>Rua do Trabalho 22A, 2610-042 Amadora</span>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-[#1a1a1a]">JOMICAR</div>
            <div className="hidden md:flex space-x-8">
              <NavLink href="/">Início</NavLink>
              <NavLink href="/viaturas">Viaturas</NavLink>
              <NavLink href="/financiamento">Financiamento</NavLink>
              <NavLink href="/sobre">Sobre Nós</NavLink>
              <NavLink href="/contactos">Contactos</NavLink>
            </div>
            <button className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-[#1a1a1a] font-medium transition-colors"
    >
      {children}
    </a>
  );
}