import React from 'react';
import Price from '../StyleSelect/Price.jsx';
import { Style } from '../ProductOverview.jsx';
import getStock from '../methods/getStock.js';
import { FakeProduct } from '../ProductOverview.jsx';
import Reviews from '../../../../../fakeData/reviews.js';


var Header = (props) => {
  var [product, updateProduct] = React.useContext(FakeProduct);
  var [style, updateStyle] = React.useContext(Style);

  return (
    <div>
      <p>[ Rating will go here ]</p>
      {/* TODO project requirement: hide the reviews <span> if there are no reviews */}
      <span>Read all {Reviews.productExample.count} reviews </span>
      <span>{getStock.getTotal(style)} in stock</span>
      <Price />
    </div>
  );
};

export default Header;