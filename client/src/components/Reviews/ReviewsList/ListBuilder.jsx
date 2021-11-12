import React, { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem.jsx';
import '../styles/style.css';


const ListBuilder = ({ productId, reviewData, sortBy, handleSortBy, starNumSelect }) => {

  const [counter, setCounter] = useState(2);
  const [currentData, setCurrentData] = useState(reviewData);

  useEffect(() => {
    setCurrentData(reviewData);
  }, [reviewData]);

  useEffect(() => {
    var filteredData = reviewData.filter((item) => item.rating === Number(starNumSelect));
    setCurrentData(filteredData);
  }, [starNumSelect]);

  const handleDisplayClick = (event) => {
    var newCounter = counter + 2;
    setCounter(newCounter);
  };

  const showCurrentStarNum = !starNumSelect ? (
    <span></span>
  ) : (
    <button>Show All Reviews</button>
  );

  if (!currentData) {
    return (
      <h1>Trying to Load Reviews...</h1>
    );
  }

  return (
    <ul>
      <div className="sortBy">
        <label htmlFor="sortBy">Sort By: </label>
        <select
          name="sortBy"
          id="sortBy"
          className="sortBy-form"
          value={sortBy}
          onChange={handleSortBy}
        >
          <option value="relevant">Most Relevant</option>
          <option value="helpful">Most Helpful</option>
          <option value="newest">Newest</option>
        </select>

        {showCurrentStarNum}

      </div>

      {
        currentData.map((review, i) => {
          if (i < counter) {
            return (
              <div className="reviewList">
                <ReviewItem review={review} key={review.review_id}/>
              </div>
            );
          }
        })
      }
      <button onClick={handleDisplayClick}>Display Two More Reviews</button>
    </ul>
  );
};

export default ListBuilder;