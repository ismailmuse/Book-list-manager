// src/components/Book.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { useParams } from 'react-router-dom';

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore.collection('books').doc(id).onSnapshot(doc => {
      setBook({ ...doc.data(), id: doc.id });
    });
    return unsubscribe;
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p className="mt-4">{book.author}</p>
      <p className="mt-4">{book.description}</p>
    </div>
  );
};

export default Book;
