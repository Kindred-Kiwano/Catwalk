import React, { useState, useEffect } from 'react';
import { getReviews } from '../../../../../Shared/makeRequest.js';
import productList from '../../../../../fakeData/productList.js';
import testReviews from '../../../../../fakeData/reviews.js';
import ReviewItem from './ReviewItem.jsx';
import ListBuilder from './ListBuilder.jsx';
import '../styles/style.css';
import 'babel-polyfill';

const ReviewsList = () => {

  const [currentCount, setCurrentCount] = useState(2);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentSort, setCurrentSort] = useState('relevant');

    useEffect(() => {
      setData(null);
      setError(null);
        const fetchData = async () => {
          try {
            const response = await getReviews(61576, currentCount, currentSort);
            console.log('Fired...');
            console.log(response);
            const newData = response.data.results;
            setData(newData);
          } catch (error) {
            setError(error);
          }
        }
        fetchData();
      }, [currentCount, currentSort])

  const handleDisplayMoreReviews = (event) => {
    var newCount = currentCount + 2;
    setCurrentCount(newCount);
  }

  const handleSortBy = (event) => {
    setCurrentSort(event.target.value);
    // setCurrentCount(2);
  }

  if (!data) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <div>
      <ListBuilder data={data} handleDisplayMoreReviews={handleDisplayMoreReviews} sortBy={currentSort} handleSortBy={handleSortBy} />
    </div>
  );
};

export default ReviewsList;