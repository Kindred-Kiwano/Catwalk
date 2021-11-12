import React, { useState, useEffect } from 'react';
import ListBuilder from './ListBuilder.jsx';
import '../styles/style.css';

const ReviewsList = ({ productId, reviewData, sortBy, handleSortBy, starNumSelect }) => {
  return (
    <div>
      <ListBuilder productId={productId} reviewData={reviewData} sortBy={sortBy} handleSortBy={handleSortBy} starNumSelect={starNumSelect} />
    </div>
  );
};

export default ReviewsList;