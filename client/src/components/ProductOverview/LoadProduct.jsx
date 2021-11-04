import React from 'react';
import { ProductOverview } from './ProductOverview.jsx';
import { elliotsGetAllProducts, getAllStyles } from '../../../../Shared/makeRequest.js';

var LoadProduct = () => {
  var [productState, setProductState] = React.useState(null);
  var Product = {};

  if (productState === null) {
    // make network request
    elliotsGetAllProducts()
      .then((productsResponse) => {
        // for now arbitrarilly choosing the first product
        Product.info = productsResponse.data[0];
        getAllStyles(Product.info.id)
          .then((stylesResponse) => {
            Product.styles = stylesResponse;
            setProductState(Product);
          })
          .catch((err) => {
            console.log(`error getting styles for product "${Product.info.name}"`);
            throw err;
          });
      })
      .catch((err) => {
        console.log('error getting products');
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