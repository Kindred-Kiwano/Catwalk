import React from 'react';
import Header from './Header.jsx';
import Description from './Description.jsx';
import Share from './Share/Share.jsx';
var ProductInfo = (props) => {
  return (
    <div id="product-info">
      <Header />
      <div id="description-and-share">
        <Description />
        <Share />
      </div>
    </div>
  );
};

export default ProductInfo;
