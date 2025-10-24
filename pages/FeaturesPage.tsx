
import React from 'react';
import { CpuChipIcon, LightBulbIcon, MagnifyingGlassIcon, PlusCircleIcon } from '../components/IconComponents';

const FeatureDetail: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="relative p-8 bg-slate-800 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-amber-500 text-white">
      {icon}
    </div>
    <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-4 text-base text-gray-400">{description}</p>
  </div>
);

const FeaturesPage: React.FC = () => {
  const features = [
    {
      title: "AI Advisor",
      description: "Engage in a natural language conversation about your portfolio. Our AI provides deep analysis, risk assessment, and performance attribution, helping you understand the 'why' behind your returns.",
      icon: <CpuChipIcon className="h-6 w-6" />
    },
    {
      title: "AI Teacher",
      description: "Master the markets at your own pace. Ask about anything from basic concepts like 'what is an ETF?' to complex strategies like options pricing models. The AI teacher provides clear, concise explanations.",
      icon: <LightBulbIcon className="h-6 w-6" />
    },
    {
      title: "AI Tracker",
      description: "Go beyond simple numbers. The AI Tracker monitors your portfolio for unusual activity, significant trend shifts, and potential opportunities, sending you intelligent alerts.",
      icon: <MagnifyingGlassIcon className="h-6 w-6" />
    },
    {
      title: "AI Portfolio Builder",
      description: "Construct a robust, diversified portfolio in minutes. Simply define your investment goals, time horizon, and risk tolerance, and our AI will generate a tailored portfolio suggestion with a detailed rationale.",
      icon: <PlusCircleIcon className="h-6 w-6" />
    },
    {
        title: "Discord Bot Integration",
        description: "Access key insights and AI features directly from your community server. Our Discord Bot brings the power of Traders Dex into your daily conversations, providing real-time data and analysis on command.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.36984C18.9171 3.42421 17.3172 2.76859 15.6172 2.37891C15.4172 2.87891 15.1172 3.67891 14.9172 4.17891C12.9172 3.87891 11.0172 3.87891 9.01719 4.17891C8.81719 3.67891 8.51719 2.87891 8.31719 2.37891C6.61719 2.76859 5.01719 3.42421 3.61719 4.36984C0.617188 8.16984 -0.382812 11.7698 0.0171875 15.3698C1.81719 16.9698 3.81719 17.9698 5.91719 18.6698C6.31719 18.1698 6.61719 17.6698 6.91719 17.0698C6.21719 16.7698 5.61719 16.3698 5.01719 15.9698C5.21719 15.7698 5.41719 15.5698 5.61719 15.3698C9.51719 17.0698 14.4172 17.0698 18.3172 15.3698C18.5172 15.5698 18.7172 15.7698 18.9172 15.9698C18.3172 16.3698 17.7172 16.7698 17.0172 17.0698C17.3172 17.6698 17.6172 18.1698 18.0172 18.6698C20.1172 17.9698 22.1172 16.9698 23.9172 15.3698C24.4172 11.2698 23.0172 7.76984 20.317 4.36984ZM8.01719 12.8698C6.91719 12.8698 6.01719 11.9698 6.01719 10.8698C6.01719 9.76984 6.91719 8.86984 8.01719 8.86984C9.11719 8.86984 10.0172 9.76984 10.0172 10.8698C10.0172 11.9698 9.11719 12.8698 8.01719 12.8698ZM16.0172 12.8698C14.9172 12.8698 14.0172 11.9698 14.0172 10.8698C14.0172 9.76984 14.9172 8.86984 16.0172 8.86984C17.1172 8.86984 18.0172 9.76984 18.0172 10.8698C18.0172 11.9698 17.1172 12.8698 16.0172 12.8698Z" /></svg>
    },
    {
        title: "Comprehensive Web App",
        description: "Access all our tools through a sleek, intuitive, and powerful web application. Designed for performance and usability, it's your central command center for all trading activities, available on any device.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-amber-400 tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            The Ultimate Trading Toolkit
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Every tool we build is designed to give you a clear, intelligent, and actionable edge in the market.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureDetail key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
