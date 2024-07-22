// src/components/Search.js
import React, { useState } from 'react';
import { firestore } from '../firebase';

import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const snapshot = await firestore.collection('books').where('title', '==', query).get();
    const books = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setResults(books);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Search Books</h1>
      <form onSubmit={handleSearch} className="mt-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Search by title"
          required
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">Search</button>
      </form>
      <div className="mt-4">
        {results.map(book => (
          <div key={book.id} className="p-4 bg-gray-100 rounded mb-4">
            <h2 className="text-xl">{book.title}</h2>
            <p className="mt-2">{book.author}</p>
            <div className="mt-4">
              <Link to={`/books/${book.id}`} className="bg-yellow-500 text-white p-2 rounded">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
