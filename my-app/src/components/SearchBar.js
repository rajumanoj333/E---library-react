// src/components/SearchBar.js

import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      axios.get(`http://localhost:8000/books?search=${query}`)
        .then((response) => {
          onSearch(response.data);
        })
        .catch((error) => console.error('Error searching books:', error));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or author"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
