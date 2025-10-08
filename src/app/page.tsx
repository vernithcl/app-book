'use client';
import React, { useState } from 'react';
import AddBookForm from '@/components/AddBookForm';
import BookList from '@/components/BookList';

type Book = {
  id: number;
  title: string;
  author: string;
};

export default function Home() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 2, title: '1984', author: 'George Orwell' },
  ]);

  const addBook = (book: Omit<Book, 'id'>) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const deleteBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <section className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Manage Your Books</h2>
      <AddBookForm onAdd={addBook} />
      <hr className="my-4" />
      <BookList books={books} onDelete={deleteBook} />
    </section>
  );
}
