'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold">
          <Link href="/">📚 Book Manager</Link>
        </div>

        <nav className="flex items-center w-full sm:w-auto gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/books" className="hover:underline">
            Books
          </Link>
          <Link href="/add-book" className="hover:underline">
            Add Book
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="hover:underline ml-auto">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="hover:underline text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:underline ml-auto">
                Login
              </Link>
              <Link href="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}
        </nav>

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