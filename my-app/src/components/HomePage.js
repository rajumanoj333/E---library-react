// src/components/HomePage.js

import React from 'react';

const HomePage = ({ books }) => {  // Receive books as a prop
  return (
    <div>
      <h1>Welcome to the E-Library</h1>
      <div className="books-list">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-card">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.description}</p>
              <button>View Details</button>
            </div>
          ))
        ) : (
          <p>No books found.</p>  // Display message when no books are found
        )}
      </div>
    </div>
  );
};

export default HomePage;
