import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import '../styles/style.css';


const ListBuilder = ({ data, handleDisplayMoreReviews, handleSortBy, sortBy }) => {
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
      </div>
      {
        data.map((review) =>
          <div className="reviewList">
            <ReviewItem review={review} key={review.review_id}/>
          </div>
        )
      }
      <button onClick={handleDisplayMoreReviews}>Display Two More Reviews</button>
    </ul>
  );
};

export default ListBuilder;