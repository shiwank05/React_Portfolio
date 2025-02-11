import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About Me', to: '/about' },
    { label: 'Education', to: '/education' },
    { label: 'Tech', to: '/technologies' },
    { label: 'Achievements', to: '/Achievements' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full flex items-center justify-between py-5 bg-black bg-opacity-95 border-b-2 border-gray-500 backdrop-blur-sm px-4'>
      <h2 className='text-white text-2xl font-bold'>Portfolio</h2>

      {/* Mobile Menu Toggle */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white focus:outline-none'>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex space-x-4'>
        {navItems.map((item, index) => (
          <Link key={index} to={item.to} className='text-neutral-300 hover:text-white'>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-black/90 md:hidden'>
          <div className='flex flex-col items-center py-6'>
            {navItems.map((item, index) => (
              <Link key={index} to={item.to} className='text-neutral-300 hover:text-white' onClick={toggleMenu}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
