import React from 'react';
import SelectQty from './SelectQty.jsx';
import SelectSize from './SelectSize.jsx';
import AddToCart from './AddToCart.jsx';
import getStock from '../methods/getStock.js';

// todo: context must be the currently selected style
import { Style } from '../ProductOverview.jsx';

var CartOptions = () => {
  var [style, updateStyle] = React.useContext(Style);

  // an object with k:v pairs like:
    // size: [list of qty options]
  var sizesAndAmounts = getStock.generateQtyOptionsForAll(style);

  // the inital state ("Select size" and "-") isn't being used, but might leave as is
  var [sizeSelected, updateSizeSelected] = React.useState('Select size');
  var [qtyList, updateQtyList] = React.useState(['-']);

  var handleSizeSelection = (event) => {
    // erase any reminders
    document.getElementById('reminder-to-select-size').innerHTML = '';

    var size = event.target.value;
    if (size === 'Select size') {
      updateSizeSelected(size);
      updateQtyList(['-']);
    } else {
      updateSizeSelected(size);
      updateQtyList(sizesAndAmounts[size]);
    }
  };

  return (
    <div>
      <SelectSize sizesAndAmounts={sizesAndAmounts} handleSizeSelection={handleSizeSelection}/>
      <SelectQty qtyList={qtyList} />
      <AddToCart sizeSelected={sizeSelected}/>
    </div>
  );
};

export default CartOptions;