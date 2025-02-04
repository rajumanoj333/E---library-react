// src/components/BookDetail.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/books/${bookId}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => console.error('Error fetching book details:', error));
  }, [bookId]);

  const handleReadBook = () => {
    window.location.href = `http://localhost:8000/books/${bookId}/read`;
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <button onClick={handleReadBook}>Read Now</button>
    </div>
  );
};

export default BookDetail;
