// this file is the head component of the "product overview" tree

import React from 'react';
import CategoryAndName from './CategoryAndName/CategoryAndName.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Share from './Share/Share.jsx';
import Images from './Images/Images.jsx';
import StyleSelect from './StyleSelect/StyleSelect.jsx';

// create a global context with dummy data
import Product from '../../../../fakeData/product.js';
export var FakeProduct = React.createContext();

export var ProductOverview = () => {

  var [product, updateProduct] = React.useState(Product);

  return (
    <div>
      <FakeProduct.Provider value={[product, updateProduct]}>
        <CategoryAndName />
        <ProductInfo />
        <Share />
        <Images />
        <StyleSelect />
      </FakeProduct.Provider>
    </div>
  );
};

