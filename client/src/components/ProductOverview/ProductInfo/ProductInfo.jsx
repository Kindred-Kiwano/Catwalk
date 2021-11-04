// head of ProductInfo subcomponent

import React from 'react';
import Header from './Header.jsx';
import Description from './Description.jsx';

var ProductInfo = (props) => {
  return (
    <div>
      <Header />
      <Description />
    </div>
  );
};

export default ProductInfo;