
import React from 'react';
import { Page } from '../types';
import { ChartBarIcon } from './IconComponents';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const footerLinks: { name: Page, group: string }[] = [
    { name: 'About', group: 'Company' },
    { name: 'Features', group: 'Company' },
    { name: 'Pricing', group: 'Company' },
    { name: 'Portfolio', group: 'Product' },
    { name: 'Market', group: 'Product' },
    { name: 'FAQ', group: 'Support' },
    { name: 'Support', group: 'Support' },
  ];

  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" onClick={() => setCurrentPage('Home')} className="flex items-center gap-2 text-white text-xl font-bold">
              <ChartBarIcon className="h-7 w-7 text-amber-400" />
              Traders Dex
            </a>
            <p className="mt-4 text-sm text-gray-400">AI-Powered Trading Intelligence.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.filter(l => l.group === 'Product').map(link => (
                <li key={link.name}>
                  <a href="#" onClick={() => setCurrentPage(link.name)} className="text-base text-gray-400 hover:text-amber-400">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
               {footerLinks.filter(l => l.group === 'Company').map(link => (
                <li key={link.name}>
                  <a href="#" onClick={() => setCurrentPage(link.name)} className="text-base text-gray-400 hover:text-amber-400">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.filter(l => l.group === 'Support').map(link => (
                <li key={link.name}>
                  <a href="#" onClick={() => setCurrentPage(link.name)} className="text-base text-gray-400 hover:text-amber-400">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-base text-gray-500 xl:text-center">&copy; {new Date().getFullYear()} Traders Dex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
