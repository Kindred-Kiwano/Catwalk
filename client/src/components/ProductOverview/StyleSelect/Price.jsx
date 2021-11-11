import React from 'react';
import { Style } from '../ProductOverview.jsx';
import '../styles.css';

var Price = () => {
  var [style, updateStyle] = React.useContext(Style);
  return (
    <React.Fragment>
      {getPrice(style)}
    </React.Fragment>
  );
};

// formats strike thru for items on sale
var getPrice = (style) => {
  var regular = style.original_price;
  var discounted = style.sale_price;
  if (style.sale_price === null) {
    return <p id="price">Price: ${regular}</p>;
  } else {
    return (
      <p id="price">
        Price:
        <span className="discount-price">${discounted}</span>
        <span className="former-price">${regular}</span>
      </p>
    );
  }

};


export default Price;