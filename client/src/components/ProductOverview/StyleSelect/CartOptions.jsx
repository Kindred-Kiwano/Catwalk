import React from 'react';
import SelectQty from './SelectQty.jsx';
import SelectSize from './SelectSize.jsx';
import AddToCart from './AddToCart.jsx';

var CartOptions = () => {
  return (
    <div>
      Area to select size, qty and "add to cart" button
      <SelectSize />
      <SelectQty />
      <AddToCart />
    </div>
  );
};

export default CartOptions;