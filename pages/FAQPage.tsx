
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { ChevronDownIcon } from '../components/IconComponents';

const FaqItemComponent: React.FC<{ question: string; answer: string; }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-700 py-6">
            <dt>
                <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-start text-left text-gray-400">
                    <span className="text-lg font-medium text-white">{question}</span>
                    <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`} />
                    </span>
                </button>
            </dt>
            {isOpen && (
                <dd className="mt-4 pr-12">
                    <p className="text-base text-gray-300">{answer}</p>
                </dd>
            )}
        </div>
    );
};

const FAQPage: React.FC = () => {
    return (
        <div className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-amber-400 tracking-wide uppercase">FAQ</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        Frequently Asked Questions
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        Have questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our support team.
                    </p>
                </div>

                <div className="mt-12">
                    <dl className="space-y-2">
                        {FAQ_ITEMS.map((item) => (
                            <FaqItemComponent key={item.question} question={item.question} answer={item.answer} />
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
