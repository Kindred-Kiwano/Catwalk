import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList/main.jsx';
import { getReviews, getReviewsMeta } from '../../../../Shared/makeRequest.js';
import getTotalReviews from '../../../../Shared/getTotalReviews.js';
import RatingBreakdown from './RatingBreakdown/main.jsx';
import AddReview from './WriteNewReview/main.jsx';
import './styles/style.css';

const RatingsAndReviews = ( {productId} ) => {

  const [showForm, setShowForm] = useState(false);
  const handleAddReviewClick = (event) => {
    setShowForm(!showForm);
  };

  const [starNum, setStarNum] = useState(null);
  const handleStarNumClick = (event) => {
    setStarNum(event.target.value);
  };

  const [sortBy, setSortBy] = useState('relevant');
  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };


  const [meta, setMeta] = useState(null);
  useEffect(() => {
    getReviewsMeta(productId)
      .then(response => setMeta(response.data));
  }, [productId]);


  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviewsMeta(productId)
      .then(response => getTotalReviews(response.data.ratings))
      .then(totalReviewCount => getReviews(productId, totalReviewCount, sortBy))
      .then(outcome => setReviews(outcome.data.results))
  }, [productId, sortBy]);


  const renderForm = showForm ? (
    <AddReview productId={productId} />
  ) : (
    <button onClick={handleAddReviewClick}>Add A Review</button>
  );

  if (!reviews) {
    return (
      <h1>Loading Reviews...</h1>
    );
  }

  if (!meta) {
    return (
      <h1>Loading Review Data...</h1>
    );
  }

  return (
    <div className="ratings-and-reviews">
      <div className="float-container">
        <div className="float-child">
          <div className="breakdown">
            <h1>Ratings & Reviews</h1>
            <RatingBreakdown reviewsInfo={meta} handleStarNumClick={handleStarNumClick} />
          </div>
        </div>

        <div className="float-child">
          <div className="list">
            <ReviewsList productId={productId} reviewData={reviews} sortBy={sortBy} handleSortBy={handleSortBy} starNumSelect={starNum}/>
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