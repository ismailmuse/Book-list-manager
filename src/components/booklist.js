// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// src/components/booklist.js
import { firestore } from '../firebase';

// your component code


const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('books').onSnapshot(snapshot => {
      const booksData = [];
      snapshot.forEach(doc => booksData.push({ ...doc.data(), id: doc.id }));
      setBooks(booksData);
    });
    return unsubscribe;
  }, []);

  const deleteBook = (id) => {
    firestore.collection('books').doc(id).delete();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Books</h1>
      <Link to="/add-book" className="mt-4 bg-blue-500 text-white p-2 rounded">Add Book</Link>
      <div className="mt-4">
        {books.map(book => (
          <div key={book.id} className="p-4 bg-gray-100 rounded mb-4">
            <h2 className="text-xl">{book.title}</h2>
            <p className="mt-2">{book.author}</p>
            <div className="mt-4">
              <Link to={`/edit-book/${book.id}`} className="bg-yellow-500 text-white p-2 rounded">Edit</Link>
              <button onClick={() => deleteBook(book.id)} className="bg-red-500 text-white p-2 rounded ml-2">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
