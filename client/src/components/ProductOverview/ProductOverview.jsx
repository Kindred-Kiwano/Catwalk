// this file is the head component of the "product overview" tree

import React from 'react';
import CategoryAndName from './CategoryAndName/CategoryAndName.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Share from './Share/Share.jsx';
import Images from './Images/Images.jsx';
import StyleSelect from './StyleSelect/StyleSelect.jsx';

// create a global contexts with dummy data
import Product from '../../../../fakeData/product.js';
export var FakeProduct = React.createContext();
export var Style = React.createContext();

export var ProductOverview = () => {
  // product that the page refers to
  var [product, updateProduct] = React.useState(Product);

  // -- LEFT OFF HERE FOR 11/03 --
  // TODO: figure out why calling updateStyle in Thumbnail.jsx is not re-rendering the images and prices etc.
  // look at the react hooks docs:
  // 'lifecycle methods' to update state - might be the missing piece!
  // rules of hooks


  // initialize to the first style in the .results array in Product.styles
  var [style, updateStyle] = React.useState(Product.styles.results[0]);
  console.log('From product overview, style is ', style);

  return (
    <div>
      <FakeProduct.Provider value={[product, updateProduct]}>
        <Style.Provider value={[style, updateStyle]} >
          <CategoryAndName />
          <ProductInfo />
          <Share />
          <Images />
          <StyleSelect />
        </Style.Provider>
      </FakeProduct.Provider>
    </div>
  );
};

