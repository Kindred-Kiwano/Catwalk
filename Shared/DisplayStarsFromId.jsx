import React from 'react';
import '../client/src/components/Reviews/styles/style.css';
import getReviewCount from './makeRequest.js';
import DisplayStarRating from './DisplayStarRating.jsx';

const DisplayStarsFromId = (productId) => {
  getReviewCount(productId)
    .then(result => DisplayStarRating(result.data.ratings));
  // .then(result => return result);
};

export default DisplayStarsFromId;