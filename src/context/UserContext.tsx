'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  username: string;
  email: string;
};

type Book = {
  id: number;
  title: string;
};

type UserContextType = {
  user: User | null;
  books: Book[];
  addBook: (title: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  // Simulate logged-in user
  const [user, setUser] = useState<User | null>({ username: 'johndoe', email: 'john@example.com' });
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'React Basics' },
    { id: 2, title: 'Next.js Guide' },
  ]);

  const addBook = (title: string) => {
    setBooks((prev) => [...prev, { id: Date.now(), title }]);
  };

  const logout = () => {
    setUser(null);
    setBooks([]);
  };

  return (
    <UserContext.Provider value={{ user, books, addBook, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
}
