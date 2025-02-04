// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import HomePage from './components/HomePage';
import BookDetail from './components/BookDetail';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchResults, setSearchResults] = useState([]); // Declare state for search results

  return (
    <Router>
      <div>
        <SearchBar onSearch={setSearchResults} />  {/* Update searchResults state */}
        <Routes>
          {/* Pass searchResults to HomePage */}
          <Route path="/" element={<HomePage books={searchResults} />} />
          <Route path="/book/:bookId" element={<BookDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
