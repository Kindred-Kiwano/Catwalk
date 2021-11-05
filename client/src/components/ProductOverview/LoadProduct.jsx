import React from 'react';
import ProductOverview from './ProductOverview.jsx';
import { getFiveRandomProducts, getProductInfoById, getAllStyles } from '../../../../Shared/makeRequest.js';

var LoadProduct = () => {
  var [productState, setProductState] = React.useState(null);
  var Product = {};

  if (productState === null) {
    // make network requests and re-render on success
    getFiveRandomProducts()
      .then((fiveProducts) => {
        return getProductInfoById(fiveProducts.data[0].id)
      })
      .then((productInfo) => {
        Product.info = productInfo.data;
        return getAllStyles(productInfo.data.id)
      })
      .then((styles) => {
        Product.styles = styles.data;
        setProductState(Product);
      })
      .catch((err) => {
        console.log('error getting product(s) and/or details');
        throw err;
      });

    return (
      <p>
        Loading product details...
      </p>
    );

  } else {
    // after network request complete, re-render to produce the product overview
    return (
      <ProductOverview productState={productState} />
    );
  }
};

export default LoadProduct;
