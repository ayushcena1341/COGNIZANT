import React from 'react';

const BookDetails = ({ show }) => {
  return (
    show && (
      <div>
        <h2>Book Details</h2>
        <p>Master React <br />670</p>
        <p>Deep Dive into Angular 11 <br />800</p>
        <p>Mongo Essentials <br />450</p>
      </div>
    )
  );
};

export default BookDetails;
