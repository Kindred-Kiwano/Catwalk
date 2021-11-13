import React from 'react';
import Price from '../StyleSelect/Price.jsx';
import { Style } from '../ProductOverview.jsx';
import getStock from '../methods/getStock.js';
import { FakeProduct } from '../ProductOverview.jsx';
import DisplayStarRating from '../../../../../Shared/DisplayStarRating.jsx';

var scrollToReviews = (event) => {
  event.preventDefault();
  var [reviews] = document.getElementsByClassName('ratings-and-reviews');
  reviews.scrollIntoView();
};

var Header = (props) => {
  var [product, updateProduct] = React.useContext(FakeProduct);
  var [style, updateStyle] = React.useContext(Style);
  var numberOfReviews = product.reviews.results.length;

  return (
    <div id="header">
      {numberOfReviews ?
        <React.Fragment>
          <span id="star-rating-container">
            <DisplayStarRating ratings={product.reviewsMeta.ratings} />
          </span>
          <a href="#" onClick={scrollToReviews}>Read all {numberOfReviews} reviews</a>
        </React.Fragment> :
        <></>}
      <span>{getStock.getTotal(style)} in stock</span>
      <Price />
    </div>
  );
};

export default Header;
