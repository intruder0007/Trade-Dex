
import React from 'react';
import { Page } from '../types';
import { ArrowRightIcon, CheckCircleIcon, CpuChipIcon, LightBulbIcon, MagnifyingGlassIcon } from '../components/IconComponents';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white mx-auto">
      {icon}
    </div>
    <h3 className="mt-5 text-lg font-medium text-white">{title}</h3>
    <p className="mt-2 text-base text-gray-400">{description}</p>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="text-center pt-16 pb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Navigate the Markets with <span className="text-amber-400">AI Precision</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          Traders Dex combines cutting-edge AI with institutional-grade tools to give you an unparalleled trading advantage. Analyze, build, and enhance your portfolio with confidence.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => setCurrentPage('Features')}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-slate-900 bg-amber-400 hover:bg-amber-500 transition-colors duration-300 shadow-lg shadow-amber-500/20"
          >
            Explore Features
          </button>
          <button
            onClick={() => setCurrentPage('Pricing')}
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
          >
            View Pricing
          </button>
        </div>
      </div>

      {/* Features Overview Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h2 className="text-base font-semibold text-amber-400 tracking-wide uppercase">Our Edge</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                A Smarter Way to Trade
            </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            icon={<CpuChipIcon className="h-6 w-6" />}
            title="AI Advisor"
            description="Get personalized insights and analysis on your portfolio by having a conversation with our advanced AI."
          />
          <FeatureCard 
            icon={<LightBulbIcon className="h-6 w-6" />}
            title="AI Teacher"
            description="Learn complex trading concepts and market dynamics with an AI that adapts to your knowledge level."
          />
          <FeatureCard 
            icon={<MagnifyingGlassIcon className="h-6 w-6" />}
            title="AI Portfolio Builder"
            description="Describe your goals and risk tolerance, and let our AI construct a diversified portfolio tailored to you."
          />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-slate-800 rounded-lg shadow-xl">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to elevate your trading?</span>
            <span className="block text-amber-400">Join Traders Dex today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={() => setCurrentPage('Pricing')}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-amber-400 hover:bg-amber-500"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
