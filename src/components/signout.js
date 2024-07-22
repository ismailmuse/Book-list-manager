// src/components/SignOut.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to home page after sign out
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Sign Out</h1>
      <button
        onClick={handleSignOut}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Sign Out
      </button>
    </div>
  );
}

export default SignOut;
