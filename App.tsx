
import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import MarketPage from './pages/MarketPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import SupportPage from './pages/SupportPage';
import ProfilePage from './pages/ProfilePage';


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'Features':
        return <FeaturesPage />;
      case 'Pricing':
        return <PricingPage />;
      case 'Portfolio':
        return <PortfolioPage />;
      case 'Market':
        return <MarketPage />;
      case 'About':
        return <AboutPage />;
      case 'FAQ':
        return <FAQPage />;
      case 'Support':
        return <SupportPage />;
      case 'Profile':
        return <ProfilePage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
