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


var Header = (props) => {
  var [product, updateProduct] = React.useContext(FakeProduct);
  var [style, updateStyle] = React.useContext(Style);
  var numberOfRatings = totalRatings(product.reviews);

  return (
    <div id="header">
      {/* TODO project requirement: hide the reviews <span> if there are no reviews */}
      <DisplayStarRating ratings={product.reviews.ratings} />
      {numberOfRatings ? <span>Read all {numberOfRatings} reviews</span> : <></>}
      <span>{getStock.getTotal(style)} in stock</span>
      <Price />
    </div>
  );
};

export default Header;
