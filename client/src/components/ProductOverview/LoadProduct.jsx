import React from 'react';
import ProductOverview from './ProductOverview.jsx';
import { getFiveRandomProducts, getProductInfoById, getAllStyles, getReviewCount } from '../../../../Shared/makeRequest.js';


var LoadProduct = () => {
// Sam and David may want to use setProductState
  var [productState, setProductState] = React.useState(null);
  var Product = {};

  if (productState === null) {
    // make network requests and re-render on success
    getFiveRandomProducts()
      .then((fiveProducts) => {
        return getProductInfoById(fiveProducts.data[0].id); // gives the product id of first one
      })
      .then((productInfo) => {
        Product.info = productInfo.data;
        return getReviewCount(productInfo.data.id);
      })

      .then((productReviews) => {
        Product.reviews = productReviews.data;
        return getAllStyles(Product.info.id);
      })

      .then((productStyles) => {
        Product.styles = productStyles.data;
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

