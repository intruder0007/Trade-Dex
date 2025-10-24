
import React from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';
import { UserIcon, ChartBarIcon } from './IconComponents';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-slate-900/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('Home'); }} className="flex-shrink-0 flex items-center gap-2 text-white text-2xl font-bold tracking-wider">
              <ChartBarIcon className="h-8 w-8 text-amber-400" />
              Traders Dex
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(link.name);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    currentPage === link.name
                      ? 'bg-slate-800 text-amber-400'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('Profile')}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white transition-colors duration-300"
            >
              <span className="sr-only">View profile</span>
              <UserIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
