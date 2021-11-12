// write here.
import React from 'react';
import { useState } from 'react';
import Bars from './Bars.jsx';
import DisplayStarRating from '../../../../../Shared/DisplayStarRating.jsx';
import '../styles/style.css';
import getPercentage from './getPercentage.js';
import getAverageScore from './getAverageRating.js';

var RatingBreakdown = ( {reviewsInfo, handleStarNumClick} ) => {


  const avgScore = getAverageScore(reviewsInfo.ratings);
  const reviewBars = getPercentage(reviewsInfo.ratings);

  return (
    <div className="ratingsBreakdown">
      <div className="topSectionRatings">
        <h1> {avgScore} <DisplayStarRating ratings={reviewsInfo.ratings} /> </h1>
      </div>
      <div>
        {reviewBars.map((item, i) => {
          return (
            <Bars percentRating={item} starNum={i+1} handleStarNumClick={handleStarNumClick} />
          );
        })}
      </div>
    </div>
  );
};

export default RatingBreakdown;