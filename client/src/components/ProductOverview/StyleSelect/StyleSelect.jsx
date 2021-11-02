import React from 'react';
import Price from './Price.jsx';
import Thumbnails from './Thumbnails.jsx';
import CartOptions from './CartOptions.jsx';

var StyleSelect = () => {
  return (
    <div>
      <h4>STYLE SELECT SUBCOMPONENT</h4>
      <Price />
      <Thumbnails />
      <CartOptions />
    </div>
  );
};

export default StyleSelect;