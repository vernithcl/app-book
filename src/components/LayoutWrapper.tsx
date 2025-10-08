'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import { AuthProvider } from '@/context/AuthContext';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
      <Footer />
      <CookieConsent />
    </AuthProvider>
  );
}
