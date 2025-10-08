'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = sessionStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    sessionStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-gray-800 text-white p-4 rounded shadow-lg max-w-lg mx-auto z-50 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm sm:flex-1">
        We use cookies to improve your experience. By continuing, you accept our{' '}
        <a href="/privacy" className="underline hover:text-gray-300">
          Privacy Policy
        </a>
        .
      </p>
      <button
        onClick={acceptCookies}
        className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 rounded transition"
      >
        Accept
      </button>
    </div>
  );
}
