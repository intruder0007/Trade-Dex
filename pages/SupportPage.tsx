
import React from 'react';

const SupportPage: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-amber-400 tracking-wide uppercase">Support</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            We're Here to Help
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Get the support you need, when you need it.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Discord Community */}
          <div className="p-8 bg-slate-800 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-white">Join our Discord</h3>
            <p className="mt-4 text-gray-400">
              Connect with fellow traders, share strategies, and get real-time support from the community and our team. Our Discord server is the heart of the Traders Dex community.
            </p>
            <a href="#" className="mt-6 inline-block w-full max-w-xs px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">
              Join Discord Server
            </a>
          </div>

          {/* Ticket System */}
          <div className="p-8 bg-slate-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white text-center">Submit a Ticket</h3>
            <p className="mt-4 text-gray-400 text-center">
              For account-specific issues or detailed inquiries, please use our ticket system for a direct line to our support staff.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" className="w-full p-3 bg-slate-700 rounded-md text-white placeholder-gray-500" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input type="text" name="subject" id="subject" className="w-full p-3 bg-slate-700 rounded-md text-white placeholder-gray-500" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows={4} className="w-full p-3 bg-slate-700 rounded-md text-white placeholder-gray-500" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-md hover:bg-amber-600 transition">
                Submit Ticket
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
