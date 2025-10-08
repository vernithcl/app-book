import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white px-6 py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left side: copyright */}
        <div className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Book App. All rights reserved.
        </div>

        {/* Center: policy links */}
        <div className="flex gap-4 text-sm">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>
        </div>

        {/* Right side: newsletter subscription */}
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            placeholder="Your email"
            className="px-3 py-1.5 rounded text-black placeholder-gray-500 w-64"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-4 py-1.5 rounded hover:bg-gray-100"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}
