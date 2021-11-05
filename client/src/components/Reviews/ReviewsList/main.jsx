import React from 'react';
import axios from '../../../../../config/config.js';
import { getReviews } from '../../../../../Shared/makeRequest.js';
import { useState } from 'react';
import productList from '../../../../../fakeData/productList.js';
import testReviews from '../../../../../fakeData/reviews.js';
import ReviewItem from './ReviewItem.jsx';

// console.log(testReviews.reviews.results);


// const currentId = 61575;
// var currentProductInfo = getReviews(currentId);
// var randomItem = [];
const ReviewsList = (props) => {

  const [currentItem, setCurrentItem] = useState(61575);

  // var randomItem = {};
  // getReviews(currentItem)
  //   .then(results => randomItem = results.data.result);

  // console.log(`Hi there this is: ${randomItem}`);
  // console.log(randomItem);
  return (
    <div>
      {
        testReviews.reviews.results.map((review) =>
          <div id="reviewList">
            <ReviewItem review={review} key={review.review_id}/>
          </div>
        )
      }
      <p>{productList[0].name}</p>
    </div>
  );
};

export default ReviewsList;