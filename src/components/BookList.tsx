'use client';
import React from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};

type Props = {
  books: Book[];
  onDelete: (id: number) => void;
};

const BookList: React.FC<Props> = ({ books, onDelete }) => {
  if (books.length === 0) return <p>No books available.</p>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author}
          <button onClick={() => onDelete(book.id)} style={{ marginLeft: '1rem' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
