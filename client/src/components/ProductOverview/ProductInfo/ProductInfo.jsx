// head of ProductInfo subcomponent

import React from 'react';
import Header from './Header.jsx';
import Description from './Description.jsx';

var ProductInfo = (props) => {
  return (
    <div>
      <h4>PRODUCT INFO SUBCOMPONENT</h4>
      <Header />
      <Description />
    </div>
  );
};

export default ProductInfo;