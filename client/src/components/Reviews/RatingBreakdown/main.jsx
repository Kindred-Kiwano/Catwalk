// write here.
import React from 'react';
import { useState } from 'react';
import testReviews from '../../../../../fakeData/reviews.js';
import DisplayStarRating from '../../../../../Shared/DisplayStarRating.jsx';
import '../styles/style.css';

var RatingBreakdown = (props) => {
  const handleReport = () => {
    alert('something will happen here');
  };

  return (
    <div className="ratingsBreakdown">
      <div className="topSectionRatings">
        {/* <h1>{RatingsAvg(testReviews)}</h1> */}
      </div>
      <DisplayStarRating ratings={testReviews.meta.ratings} />
      <div className="Bars" style={{"--rating": `2.4`}}>
        1 Star
      </div>
      <div className="Bars" style={{"--rating": `5`}}>
        2 Stars
      </div>
      <div className="Bars" style={{"--rating": `1.2`}}>
        3 Stars
      </div>
      <div className="Bars" style={{"--rating": `2.1`}}>
        4 Stars
      </div>
      <div className="Bars" style={{"--rating": `4`}}>
        5 Stars
      </div>

    </div>
  );
};

export default RatingBreakdown;