// this file is the head component of the "product overview" tree

import React from 'react';
import CategoryAndName from './CategoryAndName/CategoryAndName.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Share from './Share/Share.jsx';
import StyleSelect from './StyleSelect/StyleSelect.jsx';
import { elliotsGetAllProducts, getAllStyles } from '../../../../Shared/makeRequest.js';

// create a global contexts
// import Product from '../../../../fakeData/product.js';
export var FakeProduct = React.createContext();
export var Style = React.createContext();

export var ProductOverview = () => {
  // product that the page refers to

  // -- LEFT OFF HERE --
    // need to call to useEffect so that it can update the state values
      // may be a problem doing this if the browser renders all components with no context value until the re-render once we complete the network requests



  // will give this .info and .styles just like the dummy data
  var Product = {};
  // now we make a networdk request to update the product
  if (Product.info && Product.styles) {
    var [product, updateProduct] = React.useState(Product.info);
    var [style, updateStyle] = React.useState(Product.styles[0]);

    return (
      <div>
        <FakeProduct.Provider value={[product, updateProduct]}>
          <Style.Provider value={[style, updateStyle]} >
            <CategoryAndName />
            <ProductInfo />
            <Share />
            <StyleSelect />
          </Style.Provider>
        </FakeProduct.Provider>
      </div>
    );

  } else {
  // make network request to get 5 products
    elliotsGetAllProducts()
      .then((productsResponse) => {
        console.log('got a response!', productsResponse.data[0].id);
        // for now arbitrarilly choosing the first product
        Product.info = productsResponse.data[0];

        getAllStyles(Product.info.id)
          .then((stylesResponse) => {
            Product.styles = stylesResponse;
            // force rerender

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
  }

};

