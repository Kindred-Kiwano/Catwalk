import React from 'react';
import ProductOverview from '../ProductOverview.jsx';

// get fake data
import Product from '../../../../../fakeData/product.js';
import Reviews from '../../../../../fakeData/reviews.js';

var ProductTest = () => {

  var productState = {
    info: Product.info,
    reviews: Reviews.meta,
    styles: Product.styles
  };

  return (
    <ProductOverview productState={productState}/>
  );

};

export default ProductTest;