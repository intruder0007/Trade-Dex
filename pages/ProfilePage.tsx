
import React, { useState } from 'react';
import { MOCK_USER_PROFILE } from '../constants';
import { UserProfile } from '../types';

const ProfilePage: React.FC = () => {
    const [user] = useState<UserProfile>(MOCK_USER_PROFILE);
    const [copied, setCopied] = useState(false);
    
    const handleCopy = () => {
        navigator.clipboard.writeText(user.licenseKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl">User Profile</h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">Manage your account settings and subscription.</p>
            </div>
            
            <div className="bg-slate-800 shadow-lg rounded-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0 p-8 flex justify-center items-center">
                        <img className="h-32 w-32 rounded-full object-cover" src={user.avatarUrl} alt="User avatar" />
                    </div>
                    <div className="p-8 flex-grow">
                        <div className="uppercase tracking-wide text-sm text-amber-400 font-semibold">{user.subscription} Plan</div>
                        <h2 className="mt-1 block text-3xl leading-tight font-bold text-white">{user.name}</h2>
                        <p className="mt-2 text-gray-400">{user.email}</p>

                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-white">Your License Key</h3>
                            <div className="mt-2 flex items-center bg-slate-700 rounded-md p-3">
                                <span className="flex-grow text-gray-300 font-mono text-sm">{user.licenseKey}</span>
                                <button
                                    onClick={handleCopy}
                                    className="ml-4 px-3 py-1 text-sm font-medium bg-slate-600 hover:bg-slate-500 rounded-md text-white transition"
                                >
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </div>

                         <div className="mt-8 flex gap-4">
                            <button className="px-6 py-2 bg-amber-500 text-slate-900 font-semibold rounded-md hover:bg-amber-600 transition">
                                Manage Subscription
                            </button>
                            <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
