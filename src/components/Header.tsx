import React, { useState } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import { useScrollTo } from '../hooks/useScrollTo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection } = useNavigation();
  const scrollTo = useScrollTo();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'services', label: 'Serviços' },
    { id: 'testimonials', label: 'Depoimentos' },
  ];

  return (
    <header className="bg-black/95 text-white h-16 fixed w-full top-0 z-50 shadow-lg">
      <div className="container h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-7 h-7 text-red-600" />
          <span className="text-lg font-bold">ELITE FITNESS</span>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <nav className="hidden md:flex gap-6">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`transition-colors text-sm font-medium hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 ${
                activeSection === id ? 'text-red-500 font-semibold' : 'text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-black/95 py-4 md:hidden shadow-lg">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`block px-4 py-2 text-sm ${
                  activeSection === id
                    ? 'text-red-500 font-semibold'
                    : 'text-white hover:text-red-400'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}