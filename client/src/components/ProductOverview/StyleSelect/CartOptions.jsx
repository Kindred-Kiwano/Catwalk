import React from 'react';
import SelectQty from './SelectQty.jsx';
import SelectSize from './SelectSize.jsx';
import AddToCart from './AddToCart.jsx';

var CartOptions = () => {
  // declare a new context, return a Provider below
  // useState for inital state
    // initial state should be the
  // var SizeSelected = React.createContext()



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