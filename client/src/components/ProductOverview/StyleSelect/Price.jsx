import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';
import '../styles.css';

var Price = () => {
  var [product, updateProduct] = React.useContext(FakeProduct);
  return (
    <div>
      Price: {getPrice(product)}
    </div>
  );
};


var getPrice = (product) => {
  // MAKE DYNAMIC WHEN GETTING FROM API
  var regular = product.styles.results[0].original_price;
  var discounted = product.styles.results[0].sale_price;

  // if there's a discounted price,
  // display the discount price followed by the struckthru original price
  if (product.styles.results[0].sale_price === null) {
    // display original price
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