
import React, { useState, useMemo } from 'react';
import { MOCK_PORTFOLIO_HOLDINGS } from '../constants';
import { PortfolioHolding } from '../types';
import { getPortfolioAnalysis, buildPortfolio } from '../services/geminiService';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { SparklesIcon } from '../components/IconComponents';

type PortfolioTab = 'Dashboard' | 'AI Advisor' | 'AI Builder';

const COLORS = ['#FFC107', '#03A9F4', '#4CAF50', '#F44336', '#9C27B0'];

const PortfolioPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<PortfolioTab>('Dashboard');
    const [holdings, setHoldings] = useState<PortfolioHolding[]>(MOCK_PORTFOLIO_HOLDINGS);
    
    // AI Advisor State
    const [advisorQuery, setAdvisorQuery] = useState<string>('');
    const [advisorResponse, setAdvisorResponse] = useState<string>('');
    const [isAdvisorLoading, setIsAdvisorLoading] = useState<boolean>(false);

    // AI Builder State
    const [riskProfile, setRiskProfile] = useState<string>('Moderate');
    const [investmentGoals, setInvestmentGoals] = useState<string>('');
    const [builderResponse, setBuilderResponse] = useState<any>(null);
    const [isBuilderLoading, setIsBuilderLoading] = useState<boolean>(false);

    const totalValue = useMemo(() => holdings.reduce((acc, h) => acc + h.value, 0), [holdings]);
    const pieChartData = useMemo(() => holdings.map(h => ({ name: h.symbol, value: h.allocation })), [holdings]);

    const handleAdvisorSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!advisorQuery.trim()) return;
        setIsAdvisorLoading(true);
        setAdvisorResponse('');
        const response = await getPortfolioAnalysis(holdings, advisorQuery);
        setAdvisorResponse(response);
        setIsAdvisorLoading(false);
    };

    const handleBuilderSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!investmentGoals.trim()) return;
        setIsBuilderLoading(true);
        setBuilderResponse(null);
        try {
            const response = await buildPortfolio(riskProfile, investmentGoals);
            setBuilderResponse(JSON.parse(response));
        } catch (error) {
            console.error("Failed to parse builder response:", error);
            setBuilderResponse({ error: "An error occurred while parsing the AI's suggestion." });
        }
        setIsBuilderLoading(false);
    };

    const renderBuilderResponse = () => {
        if (!builderResponse) return null;
        if (builderResponse.error) {
            return <p className="text-red-400">{builderResponse.error}</p>;
        }
        return (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-amber-400">{builderResponse.portfolioName}</h3>
                <p className="text-gray-300">{builderResponse.rationale}</p>
                <div className="space-y-3">
                    {builderResponse.allocations?.map((alloc: any, index: number) => (
                        <div key={index} className="p-4 bg-slate-700 rounded-lg">
                            <p className="font-semibold text-white">{alloc.assetClass}: <span className="text-amber-400">{alloc.percentage}%</span></p>
                            <p className="text-sm text-gray-400">Examples: {alloc.examples?.join(', ')}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    
    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Portfolio Command Center</h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">Your complete financial picture, enhanced with AI.</p>
            </div>

            <div className="mb-8 border-b border-slate-700">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {(['Dashboard', 'AI Advisor', 'AI Builder'] as PortfolioTab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`${
                                activeTab === tab
                                ? 'border-amber-400 text-amber-400'
                                : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>
            
            <div>
                {activeTab === 'Dashboard' && (
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                             <div className="p-6 bg-slate-800 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-4">Holdings</h3>
                                <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Asset</th>
                                            <th className="px-4 py-2 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Value</th>
                                            <th className="px-4 py-2 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">24h Change</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-700">
                                        {holdings.map(h => (
                                            <tr key={h.id}>
                                                <td className="px-4 py-3 whitespace-nowrap">
                                                    <div className="font-medium text-white">{h.name}</div>
                                                    <div className="text-sm text-gray-400">{h.symbol}</div>
                                                </td>
                                                <td className="px-4 py-3 text-right whitespace-nowrap font-mono text-white">${h.value.toLocaleString()}</td>
                                                <td className={`px-4 py-3 text-right whitespace-nowrap font-mono ${h.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                    {h.change >= 0 ? '+' : ''}{h.change.toFixed(1)}%
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                             <div className="p-6 bg-slate-800 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-4">Asset Allocation</h3>
                                <div style={{ width: '100%', height: 300 }}>
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
                                                {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                                            </Pie>
                                            <Tooltip formatter={(value, name) => [`${value}%`, name]}/>
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'AI Advisor' && (
                    <div className="max-w-3xl mx-auto p-6 bg-slate-800 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-white mb-4">AI Advisor</h2>
                        <p className="text-gray-400 mb-6">Ask anything about your portfolio. For example: "What are the biggest risks in my portfolio right now?"</p>
                        <form onSubmit={handleAdvisorSubmit}>
                            <textarea
                                value={advisorQuery}
                                onChange={e => setAdvisorQuery(e.target.value)}
                                className="w-full p-3 bg-slate-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 border border-slate-600 transition"
                                rows={3}
                                placeholder="Your question..."
                            />
                            <button type="submit" disabled={isAdvisorLoading} className="mt-4 w-full flex justify-center items-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-md hover:bg-amber-600 disabled:bg-slate-600 disabled:cursor-not-allowed transition">
                                <SparklesIcon className="h-5 w-5" />
                                {isAdvisorLoading ? 'Analyzing...' : 'Ask AI'}
                            </button>
                        </form>
                        {isAdvisorLoading && <div className="text-center mt-6">Loading...</div>}
                        {advisorResponse && (
                            <div className="mt-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                <h3 className="font-semibold text-amber-400 mb-2">AI Analysis:</h3>
                                <p className="text-white whitespace-pre-wrap">{advisorResponse}</p>
                            </div>
                        )}
                    </div>
                )}
                {activeTab === 'AI Builder' && (
                    <div className="max-w-3xl mx-auto p-6 bg-slate-800 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-white mb-4">AI Portfolio Builder</h2>
                        <p className="text-gray-400 mb-6">Define your financial profile and let our AI suggest a model portfolio.</p>
                        <form onSubmit={handleBuilderSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Risk Profile</label>
                                    <select value={riskProfile} onChange={e => setRiskProfile(e.target.value)} className="w-full p-3 bg-slate-700 rounded-md text-white border border-slate-600 focus:ring-2 focus:ring-amber-400">
                                        <option>Conservative</option>
                                        <option>Moderate</option>
                                        <option>Aggressive</option>
                                    </select>
                                </div>
                                <div>
                                     <label className="block text-sm font-medium text-gray-300 mb-1">Investment Goals</label>
                                     <textarea
                                        value={investmentGoals}
                                        onChange={e => setInvestmentGoals(e.target.value)}
                                        className="w-full p-3 bg-slate-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 border border-slate-600 transition"
                                        rows={3}
                                        placeholder="e.g., Long-term growth, retirement in 20 years, focus on tech and renewable energy."
                                    />
                                </div>
                            </div>
                            <button type="submit" disabled={isBuilderLoading} className="mt-6 w-full flex justify-center items-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-md hover:bg-amber-600 disabled:bg-slate-600 disabled:cursor-not-allowed transition">
                                <SparklesIcon className="h-5 w-5" />
                                {isBuilderLoading ? 'Building...' : 'Generate Portfolio'}
                            </button>
                        </form>
                         {isBuilderLoading && <div className="text-center mt-6">Loading...</div>}
                         {builderResponse && (
                            <div className="mt-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                <h3 className="font-semibold text-amber-400 mb-2">AI Suggestion:</h3>
                                {renderBuilderResponse()}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioPage;
