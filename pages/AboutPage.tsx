
import React from 'react';

const AboutPage: React.FC = () => {
    const teamMembers = [
        { name: 'Jane Doe', role: 'CEO & Founder', imageUrl: 'https://picsum.photos/id/237/400/400' },
        { name: 'John Smith', role: 'Chief Technology Officer', imageUrl: 'https://picsum.photos/id/238/400/400' },
        { name: 'Emily White', role: 'Head of AI Research', imageUrl: 'https://picsum.photos/id/239/400/400' },
    ];
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-amber-400 tracking-wide uppercase">About Us</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        Democratizing Financial Intelligence
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        We are a team of financial experts, data scientists, and engineers passionate about leveling the playing field in the financial markets.
                    </p>
                </div>

                <div className="mt-16 text-lg text-gray-300 space-y-6 max-w-4xl mx-auto">
                    <p>
                        Traders Dex was founded on a simple yet powerful idea: that every trader, regardless of their background or capital, deserves access to the same high-caliber tools and insights used by the world's top financial institutions. The markets are complex and ever-changing, and navigating them successfully requires more than just intuition. It requires data, analysis, and a deep understanding of underlying dynamics.
                    </p>
                    <p>
                        Our mission is to build the most advanced, intuitive, and powerful AI-driven platform for retail traders. We leverage state-of-the-art machine learning and large language models to distill vast amounts of market data into clear, actionable intelligence. Whether you're building a long-term portfolio or executing short-term trades, Traders Dex is designed to be your indispensable co-pilot, helping you make smarter decisions with greater confidence.
                    </p>
                </div>

                <div className="mt-20">
                    <h3 className="text-center text-2xl font-bold text-white">Our Leadership</h3>
                    <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {teamMembers.map(person => (
                            <div key={person.name} className="space-y-4 text-center">
                                <img className="mx-auto h-40 w-40 rounded-full object-cover" src={person.imageUrl} alt={person.name} />
                                <div className="space-y-2">
                                    <h4 className="text-xl font-medium text-white">{person.name}</h4>
                                    <p className="text-amber-400">{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
