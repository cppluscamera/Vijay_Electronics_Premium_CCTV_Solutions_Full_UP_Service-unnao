
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Page } from '../types.ts';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: Page.HOME },
    { name: 'Installation', path: Page.INSTALLATION },
    { name: 'Repair', path: Page.REPAIR },
    { name: 'Maintenance', path: Page.MAINTENANCE },
    { name: 'Admin', path: Page.ADMIN },
  ];

  return (
    <nav className="fixed w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
        <Link to="/" className="flex items-center space-x-2 group">
          <ShieldCheck className="w-8 h-8 text-[#00d2ff] group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold tracking-tight text-white">
            VIJAY <span className="text-[#00d2ff]">ELECTRONICS</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#00d2ff] ${
                location.pathname === link.path ? 'text-[#00d2ff]' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+918090090051"
            className="bg-[#00d2ff] text-[#0f172a] px-5 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-all btn-glow"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 glass-card rounded-2xl p-4 flex flex-col space-y-4 animate-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium p-2 rounded-lg transition-colors ${
                location.pathname === link.path ? 'bg-[#00d2ff]/10 text-[#00d2ff]' : 'text-gray-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+918090090051"
            className="bg-[#00d2ff] text-[#0f172a] p-3 rounded-xl font-bold text-center"
          >
            Contact Support
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
