// src/components/BookForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { firestore } from '../firebase';

const BookForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const unsubscribe = firestore.collection('books').doc(id).onSnapshot(doc => {
        const book = doc.data();
        setTitle(book.title);
        setAuthor(book.author);
        setDescription(book.description);
      });
      return unsubscribe;
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await firestore.collection('books').doc(id).update({ title, author, description });
    } else {
      await firestore.collection('books').add({ title, author, description });
    }
    navigate.push('/books');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{id ? 'Edit Book' : 'Add Book'}</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {id ? 'Update Book' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
