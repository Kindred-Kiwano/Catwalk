import React from 'react';
import axios from '../../../../../config/config.js';
import { getReviews } from '../../../../../Shared/makeRequest.js';
import productList from '../../../../../fakeData/productList.js';
import testReviews from '../../../../../fakeData/reviews.js';
import ReviewItem from './ReviewItem.jsx';

console.log(testReviews.reviews.results);
const ReviewsList = (props) => {
  return (
    <div>
      {testReviews.reviews.results.map((review) =>
        <div id="reviewList">
          <ReviewItem review={review} key={review.review_id}/>
        </div>
      )}
      <p>{productList[0].name}</p>
    </div>
  );
};

export default ReviewsList;