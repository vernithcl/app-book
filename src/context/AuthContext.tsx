'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

type AuthContextType = {
  isLoggedIn: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const loggedInCookie = Cookies.get('loggedIn');
    const usernameCookie = Cookies.get('username');
    if (loggedInCookie === 'true' && usernameCookie) {
      setIsLoggedIn(true);
      setUsername(usernameCookie);
    }
  }, []);

  const login = (name: string) => {
    Cookies.set('loggedIn', 'true');
    Cookies.set('username', name);
    setIsLoggedIn(true);
    setUsername(name);
  };

  const logout = () => {
    Cookies.remove('loggedIn');
    Cookies.remove('username');
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
