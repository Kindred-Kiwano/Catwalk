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
  var [qtyList, updateQtyList] = React.useState(['-']);

  var handleSizeSelection = (event) => {
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
      <AddToCart />
    </div>
  );
};

export default CartOptions;