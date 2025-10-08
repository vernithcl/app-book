'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );
}
