import React from 'react';
import Images from './Images/Images.jsx';
import Price from './Price.jsx';
import Thumbnails from './Thumbnails.jsx';
import CartOptions from './CartOptions.jsx';

var StyleSelect = () => {
  return (
    <div>
      <Images />
      <Price />
      <Thumbnails />
      <CartOptions />
    </div>
  );
};

export default StyleSelect;