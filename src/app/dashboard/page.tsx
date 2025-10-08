'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const isLoggedIn = Cookies.get('loggedIn');
    const name = Cookies.get('username');

    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setUsername(name || 'User');
    }
  }, [router]);

  if (!username) return null; // Or loading state

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Welcome, {username}!</h1>
      {/* Show user books here */}
    </div>
  );
}
