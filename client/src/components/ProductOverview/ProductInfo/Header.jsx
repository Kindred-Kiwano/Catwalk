import React from 'react';

// dummy data
import { FakeProduct } from '../ProductOverview.jsx';
import Reviews from '../../../../../fakeData/reviews.js';
import FakeRating from '../../RelatedProducts/FakeRating.jsx';

var Header = (props) => {
  var [product, updateProduct] = React.useContext(FakeProduct);

  return (
    <div>
      <FakeRating />
      <span>Read all {Reviews.productExample.count} reviews </span>
      <span>TODO - dynamically  get amt stock from selected style</span>
      <span>TODO - dynamically get price from selected style</span>
    </div>
  );
};

export default Header;