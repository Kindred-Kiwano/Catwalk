import React from 'react';
import Price from '../StyleSelect/Price.jsx';
import { Style } from '../ProductOverview.jsx';
import getStock from '../methods/getStock.js';
import { FakeProduct } from '../ProductOverview.jsx';
import DisplayStarRating from '../../../../../Shared/DisplayStarRating.jsx';

var totalRatings = (reviewsMeta) => {

  var ratingsSum = 0;
  var ratingsToQty = reviewsMeta.ratings;
  for (var rating in ratingsToQty) {
    ratingsSum += Number(ratingsToQty[rating]);
  }
  return ratingsSum;
};

var scrollToReviews = (event) => {
  event.preventDefault();
  var [reviews] = document.getElementsByClassName('ratings-and-reviews');
  reviews.scrollIntoView();
};


var Header = (props) => {
  var [product, updateProduct] = React.useContext(FakeProduct);
  var [style, updateStyle] = React.useContext(Style);
  var numberOfRatings = totalRatings(product.reviews);

  return (
    <div id="header">
      {numberOfRatings ?
        <React.Fragment>
          <DisplayStarRating ratings={product.reviews.ratings} />
          <a href="#" onClick={scrollToReviews}>Read all {numberOfRatings} reviews</a>
        </React.Fragment> :
        <></>}
      <span>{getStock.getTotal(style)} in stock</span>
      <Price />
    </div>
  );
};

export default Header;
