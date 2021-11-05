import React from 'react';
import ProductOverview from './ProductOverview.jsx';
import { getFiveRandomProducts, getProductInfoById, getAllStyles } from '../../../../Shared/makeRequest.js';

var LoadProduct = () => {
  var [productState, setProductState] = React.useState(null);
  var Product = {};

  if (productState === null) {
    // make network request
    getFiveRandomProducts()
      .then((fiveProducts) => {
        getProductInfoById(fiveProducts.data[0].id)
          .then((productInfo) => {
            Product.info = productInfo.data;
            getAllStyles(productInfo.data.id)
              .then((styles) => {
                Product.styles = styles.data;
                setProductState(Product);
              })
              .catch((err) => {
                console.log('error getting styles');
                throw err;
              });
          }).catch((err) => {
            console.log('error getting product by id');
            throw err;
          });
      })
      .catch((err) => {
        console.log('error getting initial five products');
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