import React from 'react';
import ReviewsList from './ReviewsList/main.jsx';
import RatingBreakdown from './RatingBreakdown/main.jsx';

const RatingsAndReviews = (props) => {
  return (
    <div>
      <h1> Reviews </h1>
      <ReviewsList />
      <h1> Rating Breakdown </h1>
      <RatingBreakdown />
    </div>
  );
};

export default RatingsAndReviews;