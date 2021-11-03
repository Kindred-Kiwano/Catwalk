import React from 'react';
import { Style } from '../ProductOverview.jsx';
import '../styles.css';

var Price = () => {
  var [style, updateStyle] = React.useContext(Style);
  return (
    <div>
      Price: {getPrice(style)}
    </div>
  );
};

// formats strike thru for items on sale
var getPrice = (style) => {
  var regular = style.original_price;
  var discounted = style.sale_price;
  if (style.sale_price === null) {
    return <span>${regular}</span>;
  } else {
    return (
      <span>
        <span className="discount-price">${discounted}</span>
        <span className="former-price">${regular}</span>
      </span>
    );
  }

};


export default Price;