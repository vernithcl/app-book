'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo / App Title */}
        <div className="text-2xl font-bold">
          <Link href="/">📚 Book Manager</Link>
        </div>

        {/* Menu and login */}
        <nav className="flex items-center w-full sm:w-auto gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/login" className="hover:underline ml-auto">
            Login
          </Link>
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
