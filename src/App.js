// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import NavBar from './components/nav';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import BookList from './components/booklist';
import Book from './components/book';
import BookForm from './components/bookform';
import Search from './components/search';
import SignIn from './components/signin';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/books" exact component={BookList} />
            <Route path="/books/:id" component={Book} />
            <Route path="/add-book" component={BookForm} />
            <Route path="/edit-book/:id" component={BookForm} />
            <Route path="/search" component={Search} />
            <Route path="/signin" component={SignIn} />
        </div>
      </div> 
    </Router>
    
  );
}

export default App;
