import React from 'react';

export default function Logo() {
  return (
    <a href="/" className="flex items-center">
      <img
        src="/logo.svg"
        alt="Jomicar"
        className="h-12"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <span className="text-2xl font-bold text-[#1a1a1a] hidden">JOMICAR</span>
    </a>
  );
}