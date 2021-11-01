import React from 'react';
import { FakeProduct } from 'ProductOverview.jsx';

var Price = () => {
  var prod = React.useContext(FakeProduct);
  return (
    <div>
      Price: $ {getPrice(prod)}

    </div>
  );
};


var getPrice = (prod) => {
  // MAKE DYNAMIC WHEN GETTING FROM API
  var regular = prod.styles.results[0].original_price;
  var discounted = prod.styles.results[0].sale_price;

  // if there's a discounted price,
  // display the discount price followed by the struckthru original price
  if (prod.styles.results[0].sale_price === null) {
    // display original price
    return <span>{regular}</span>;
  } else {
    return (
      <span>
        <span>{discounted}</span>
        <span className="obnoxious-discount">{regular}</span>
      </span>
    );
  }

};


export default Price;