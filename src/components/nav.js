// src/components/NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firestore';

const NavBar = () => {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const signOut = () => {
    auth.signOut().then(() => {
      navigate('/signin');
    }).catch((error) => {
      console.error('Sign out error', error);
    });
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Book List Manager</Link>
        <div>
          <Link to="/" className="px-4">Home</Link>
          <Link to="/about" className="px-4">About</Link>
          <Link to="/contact" className="px-4">Contact</Link>
          <Link to="/books" className="px-4">Books</Link>
          {user ? (
            <>
              <Link to="/search" className="px-4">Search</Link>
              <button onClick={signOut} className="px-4">Sign Out</button>
            </>
          ) : (
            <Link to="/signin" className="px-4">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
