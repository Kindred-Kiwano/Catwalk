import React from 'react';
import { Style } from '../ProductOverview.jsx';

var Price = () => {
  var [style, updateStyle] = React.useContext(Style);
  return (
    <React.Fragment>
      {getPrice(style)}
    </React.Fragment>
  );
};

var getPrice = (style) => {
  var regular = style.original_price;
  var discounted = style.sale_price;
  if (style.sale_price === null) {
    return <p id="price">${regular}</p>;
  } else {
    return (
      <p id="price">
        <span className="discount-price">${discounted}</span>
        &nbsp;
        <span className="former-price">${regular}</span>
      </p>
    );
  }
};

export default Price;
