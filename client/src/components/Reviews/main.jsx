import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList/main.jsx';
import RatingBreakdown from './RatingBreakdown/main.jsx';
import AddReview from './WriteNewReview/main.jsx';
import './styles/style.css';

const RatingsAndReviews = (props) => {

  const [showForm, setShowForm] = useState(false);
  const handleAddReviewClick = (event) => {
    console.log(showForm);
    setShowForm(!showForm);
  };

  const renderForm = showForm ? (
    <AddReview />
  ) : (
    <button onClick={handleAddReviewClick}>Add A Review</button>
  );

  return (
    <div className="ratings-and-reviews">
      <div className="float-container">
        <div className="float-child">
          <div className="breakdown">
            <h1>Ratings & Reviews</h1>
            <RatingBreakdown />
          </div>
        </div>

        <div className="float-child">
          <div className="list">
            <ReviewsList />
          </div>
        </div>
      </div>
      <div className="write-review">
        {renderForm}
      </div>
    </div>

  );
};

export default RatingsAndReviews;