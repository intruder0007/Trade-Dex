
import React, { useState, useEffect } from 'react';
import { MOCK_MARKET_NEWS } from '../constants';
import { MarketNewsArticle } from '../types';
import { getMarketSummary } from '../services/geminiService';
import { SparklesIcon } from '../components/IconComponents';

const MarketPage: React.FC = () => {
    const [marketSummary, setMarketSummary] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchSummary = async () => {
            setIsLoading(true);
            const summary = await getMarketSummary();
            setMarketSummary(summary);
            setIsLoading(false);
        };
        fetchSummary();
    }, []);

    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Market Pulse</h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">Stay ahead of the curve with real-time news and AI-powered insights.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* AI Market Summary */}
                <div className="lg:col-span-1">
                    <div className="p-6 bg-slate-800 rounded-lg shadow-lg sticky top-24">
                        <h2 className="flex items-center text-2xl font-bold text-white mb-4">
                            <SparklesIcon className="h-6 w-6 text-amber-400 mr-2"/>
                            AI Daily Briefing
                        </h2>
                        {isLoading ? (
                            <div className="space-y-4 animate-pulse">
                                <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                                <div className="h-4 bg-slate-700 rounded"></div>
                                <div className="h-4 bg-slate-700 rounded"></div>
                                <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                            </div>
                        ) : (
                            <p className="text-gray-300 whitespace-pre-wrap">{marketSummary}</p>
                        )}
                    </div>
                </div>

                {/* Market News Feed */}
                <div className="lg:col-span-2">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">Latest News</h2>
                        {MOCK_MARKET_NEWS.map((article) => (
                            <div key={article.id} className="p-6 bg-slate-800 rounded-lg shadow-lg transform hover:bg-slate-700/50 transition-colors duration-300">
                                <div className="flex justify-between items-baseline">
                                     <h3 className="text-xl font-semibold text-white">{article.title}</h3>
                                     <p className="text-sm text-gray-500">{article.timestamp}</p>
                                </div>
                                <p className="text-sm font-medium text-amber-400 mt-1">{article.source}</p>
                                <p className="mt-3 text-gray-400">{article.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketPage;
