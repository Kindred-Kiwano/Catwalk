import React from 'react';
import SelectQty from './SelectQty.jsx';
import SelectSize from './SelectSize.jsx';
import AddToCart from './AddToCart.jsx';
import getStock from '../methods/getStock.js';
import { Style } from '../ProductOverview.jsx';

var CartOptions = () => {
  var [style, updateStyle] = React.useContext(Style);
  var sizesObject = getStock.generateQtyOptionsForAll(style);

  var [sizeSelected, updateSizeSelected] = React.useState('Select size');
  var [qtyList, updateQtyList] = React.useState(['-']);

  var handleSizeSelection = (event) => {
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
    <div id="check-out">
      <div id="select-size-qty">
        <label>
          Size
          <SelectSize sizesObject={sizesObject} handleSizeSelection={handleSizeSelection}/>
        </label>
        <label>
          Qty
          <SelectQty sizeSelected={sizeSelected} qtyList={qtyList} />
        </label>
      </div>
      <AddToCart sizeSelected={sizeSelected} sizesObject={sizesObject}/>
    </div>
  );
};

export default CartOptions;
