'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Subscribed! (placeholder)');
  };

  return (
    <footer className="bg-blue-600 text-white px-6 py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Book App. All rights reserved.
        </div>

        <div className="flex gap-4 text-sm">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
           <Link href="/terms" className="hover:underline">
            Contact Us
          </Link>
        </div>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
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
