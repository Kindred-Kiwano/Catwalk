import React from 'react';
import Price from '../StyleSelect/Price.jsx';
import { Style } from '../ProductOverview.jsx';
import getStock from '../methods/getStock.js';

// dummy data
import { FakeProduct } from '../ProductOverview.jsx';
import Reviews from '../../../../../fakeData/reviews.js';
// from
import FakeRating from '../../RelatedProducts/FakeRating.jsx';

var Header = (props) => {
  var [product, updateProduct] = React.useContext(FakeProduct);
  var [style, updateStyle] = React.useContext(Style);

  return (
    <div>
      <FakeRating />
      {/* project requirement: hide the reviews <span> if there are no reviews */}
      <span>Read all {Reviews.productExample.count} reviews </span>
      <span>{getStock.getTotal(style)} in stock</span>
      {/* should render as the other one in our style selector does, wrapped with the same context! */}
      <Price />
    </div>
  );
};

export default Header;