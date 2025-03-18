import React from 'react';

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px', textAlign: 'center' }}>
      <img src={image} alt={name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <h3>{name}</h3>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Author:</strong> {author}</p>
    </div>
  );
};

export default BookCard;
