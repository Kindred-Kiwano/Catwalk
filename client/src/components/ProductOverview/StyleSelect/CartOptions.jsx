import React from 'react';
import SelectQty from './SelectQty.jsx';
import SelectSize from './SelectSize.jsx';
import AddToCart from './AddToCart.jsx';
import getStock from '../methods/getStock.js';

// todo: context must be the currently selected style
import { FakeProduct } from '../ProductOverview.jsx';

var CartOptions = () => {

  var prod = React.useContext(FakeProduct);
  var sizesAndAmounts = getStock.generateQtyOptionsForAll(prod);
  var [sizeSelected, updateSizeSelected] = React.useState('Select size');
  // array of ints that is at the size selected
  var availableQuantities = sizesAndAmounts[sizeSelected];

  var handleSizeSelection = (event) => {
    // get the item clicked
    var size = event.target.value;
    // updateSizeSelected with the inner html
    console.log('selected size: ', size);
    updateSizeSelected(size);
    // this should also update available quantities unless theres some weird async thing I didn't know about
  };


  return (
    <div>
      Area to select size, qty and "add to cart" button
      {/* pass size selector the updater function and the sizes available */}
      <SelectSize sizesAndAmounts={sizesAndAmounts} handleSizeSelection={handleSizeSelection}/>
      {/* pass qty selector the resulting qty options */}
      <SelectQty availableQuantities={availableQuantities} />
      <AddToCart />
    </div>
  );
};

export default CartOptions;