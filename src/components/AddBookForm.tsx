'use client';
import React, { useState } from 'react';

type Props = {
  onAdd: (book: { title: string; author: string }) => void;
};

const AddBookForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author) return;
    onAdd({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '0.5rem' }}
      />
      <input
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ marginRight: '0.5rem' }}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
