
import { Page, NavLink, PortfolioHolding, MarketNewsArticle, FaqItem, PricingTier, UserProfile } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Market', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Support', href: '#' },
];

export const MOCK_PORTFOLIO_HOLDINGS: PortfolioHolding[] = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', value: 23560.50, change: 2.5, allocation: 35 },
  { id: '2', name: 'Ethereum', symbol: 'ETH', value: 11250.75, change: -1.2, allocation: 25 },
  { id: '3', name: 'NVIDIA Corp', symbol: 'NVDA', value: 8500.00, change: 5.8, allocation: 15 },
  { id: '4', name: 'Tesla Inc', symbol: 'TSLA', value: 5400.25, change: 1.1, allocation: 10 },
  { id: '5', name: 'S&P 500 ETF', symbol: 'VOO', value: 6780.00, change: 0.5, allocation: 15 },
];

export const MOCK_MARKET_NEWS: MarketNewsArticle[] = [
  { id: '1', title: 'Federal Reserve Hints at Interest Rate Stability', source: 'Bloomberg', summary: 'Officials suggest a pause in rate hikes, citing moderating inflation and a resilient labor market.', timestamp: '2 hours ago' },
  { id: '2', title: 'Tech Stocks Rally on Positive Earnings Reports', source: 'Reuters', summary: 'Major tech giants beat earnings expectations, driving the NASDAQ to new highs.', timestamp: '5 hours ago' },
  { id: '3', title: 'Crude Oil Prices Surge Amid Geopolitical Tensions', source: 'Wall Street Journal', summary: 'Supply concerns in the Middle East have pushed oil prices to their highest level in six months.', timestamp: '1 day ago' },
];

export const FAQ_ITEMS: FaqItem[] = [
    {
        question: "What is Traders Dex?",
        answer: "Traders Dex is an AI-powered platform designed to provide traders with advanced tools for portfolio management, market analysis, and real-time learning. Our goal is to empower you to make smarter, data-driven trading decisions."
    },
    {
        question: "How does the AI Advisor work?",
        answer: "Our AI Advisor uses advanced language models to analyze your portfolio and market data. You can ask it questions in natural language, and it will provide insights, identify risks, and suggest potential opportunities based on your trading style and goals."
    },
    {
        question: "Is my financial data secure?",
        answer: "Absolutely. We prioritize your security and privacy. All data is encrypted using industry-standard protocols. We do not store sensitive personal financial information on our servers."
    },
    {
        question: "How do I get my license key?",
        answer: "Upon subscribing to one of our plans, your unique license key will be generated and made available in your User Profile page. This key is used to activate your account and access our suite of tools."
    },
    {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, you can cancel your subscription at any time through your User Profile settings. You will retain access to your plan's features until the end of the current billing period."
    }
];

export const PRICING_TIERS: PricingTier[] = [
    {
        name: "Starter",
        price: "$49",
        description: "For individuals getting started in the market.",
        features: ["AI Market Summary", "Portfolio Tracker", "Basic Market News", "Discord Community Access"],
        isPopular: false
    },
    {
        name: "Pro Trader",
        price: "$99",
        description: "The complete toolkit for serious traders.",
        features: ["Everything in Starter", "AI Advisor", "AI Portfolio Builder", "Advanced Signals & Summary", "Priority Support"],
        isPopular: true
    },
    {
        name: "Institutional",
        price: "Contact Us",
        description: "For funds, firms, and professional teams.",
        features: ["Everything in Pro Trader", "API Access", "Admin Dashboard", "Team Management", "Dedicated Account Manager"],
        isPopular: false
    }
];

export const MOCK_USER_PROFILE: UserProfile = {
  name: 'Alex Johnson',
  email: 'alex.j@example.com',
  subscription: 'Pro Trader',
  licenseKey: 'TDX-PRO-A7B3-C9D2-E1F6',
  avatarUrl: 'https://picsum.photos/200'
};
