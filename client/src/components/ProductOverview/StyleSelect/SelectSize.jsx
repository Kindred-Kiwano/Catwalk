import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';

var SelectSize = () => {
  var prod = React.useContext(FakeProduct);
  return (
    <div>
      {getAvailableSizes(prod)}
    </div>
  );
};


var getAvailableSizes = (prod) => {
  // get all SKUS of the selected product
  var skuObject = prod.styles.results[0].skus;
  var available = Object.keys(skuObject);
  console.log('list of skus: ', available);
  var inStock = [];
  available.forEach((sku) => {
    if (skuObject[sku].quantity !== 0) {
      inStock.push(
        <option value={skuObject[sku].size}>
          {skuObject[sku].size}
        </option>
      );
    }
  });

  if (inStock.length === 0) {
    inStock.push(<option VALUE="OUT OF STOCK">
      OUT OF STOCK
    </option>);
  }

  return (
    <select>{inStock}</select>
  );

};


export default SelectSize;

