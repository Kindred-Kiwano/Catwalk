// write here.
import React from 'react';
import { useState } from 'react';
import testReviews from '../../../../../fakeData/reviews.js';
import '../styles/style.css';

var RatingBreakdown = (props) => {

  const handleReport = () => {
    alert('something will happen here');
  };

  const RatingsAvg = (product) => {
    let ratings = product.meta.ratings;
    let totalScore = Number(ratings[1]) + Number(ratings[2]) * 2 + Number(ratings[3]) * 3 + Number(ratings[4]) * 4 + Number(ratings[5]) * 5;
    let avgNum = Number(ratings[1]) + Number(ratings[2]) + Number(ratings[3]) + Number(ratings[4]) + Number(ratings[5]);
    let totalAvg = totalScore / avgNum;
    let roundedNum = (Math.round(totalAvg * 4) / 4).toFixed(2);
    return roundedNum;
  };
  return (
    <div id="ratingsBreakdown">
      <div className="topSectionRatings">
        Average Score: {RatingsAvg(testReviews)}
      </div>
      <div className="Stars" style={{"--rating": `${RatingsAvg(testReviews)}`}}>

      </div>
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