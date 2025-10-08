'use client'; // for interactivity (like search input)

import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo / App Title */}
        <div className="text-2xl font-bold">📚 Book Manager</div>

        {/* Menu items */}
        <nav className="flex gap-6 text-sm font-medium">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
        </nav>

        {/* Global search input */}
        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full sm:w-64 px-3 py-1.5 rounded text-black placeholder-gray-500"
          />
        </div>
      </div>
    </header>
  );
}
