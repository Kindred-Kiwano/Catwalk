// head of the product overview tree

import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';

var ProductOverview = () => {
  return (
    <div>
      <a href="https://shop.lululemon.com/c/mens-polos/_/N-8kx" >Shoes</a>
      <span> {'>'} super fashionable</span>
      <ProductInfo />
    </div>
  );
};

export default ProductOverview;