
import React from 'react';
import { PRICING_TIERS } from '../constants';
import { CheckCircleIcon } from '../components/IconComponents';

const PricingPage: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-amber-400 tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Choose the Plan That's Right for You
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Unlock your trading potential with a plan tailored to your needs. All plans come with a unique license key.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 bg-slate-800 rounded-2xl shadow-lg border-2 ${tier.isPopular ? 'border-amber-400' : 'border-slate-700'}`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                  <span className="bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full px-4 py-1.5">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-4 text-gray-400">{tier.description}</p>
              <div className="mt-6">
                <span className="text-5xl font-extrabold text-white">{tier.price}</span>
                {tier.price !== 'Contact Us' && <span className="text-base font-medium text-gray-400">/mo</span>}
              </div>
              <ul className="mt-8 space-y-4 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon className="h-6 w-6 text-green-400" />
                    </div>
                    <p className="ml-3 text-base text-gray-300">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className={`w-full px-6 py-3 text-base font-medium rounded-md ${
                    tier.isPopular 
                    ? 'bg-amber-400 text-slate-900 hover:bg-amber-500' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                } transition-colors duration-300`}>
                  {tier.price === 'Contact Us' ? 'Contact Sales' : 'Choose Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
