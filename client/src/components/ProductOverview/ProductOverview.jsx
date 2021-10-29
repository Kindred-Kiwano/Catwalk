// this file is the head component of the "product overview" tree

import React from 'react';
// main subcomponents:
import CategoryAndName from './CategoryAndName/CategoryAndName.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Share from './Share/Share.jsx';
import Images from './Images/Images.jsx';
import StyleSelect from './StyleSelect/StyleSelect.jsx';

var ProductOverview = () => {
  return (
    <div>
      <CategoryAndName />
      <ProductInfo />
      <Share />
      <Images />
      <StyleSelect />
    </div>
  );
};

export default ProductOverview;