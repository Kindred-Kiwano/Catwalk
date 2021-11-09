import React from 'react';
import SelectQty from './SelectQty.jsx';
import SelectSize from './SelectSize.jsx';
import AddToCart from './AddToCart.jsx';
import getStock from '../methods/getStock.js';

// todo: context must be the currently selected style
import { Style } from '../ProductOverview.jsx';

var CartOptions = () => {
  var [style, updateStyle] = React.useContext(Style);
  var sizesObject = getStock.generateQtyOptionsForAll(style);

  // the inital state ("Select size" and "-") isn't being used, but might leave as is
  var [sizeSelected, updateSizeSelected] = React.useState('Select size');
  // var [sizeList, updateSizeList]
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
      updateQtyList(sizesObject[size].quantities);
    }
  };

  return (
    <div>
      <SelectSize sizesObject={sizesObject} handleSizeSelection={handleSizeSelection}/>
      <SelectQty sizeSelected={sizeSelected} qtyList={qtyList} />
      <AddToCart sizeSelected={sizeSelected} sizesObject={sizesObject}/>
    </div>
  );
};

export default CartOptions;