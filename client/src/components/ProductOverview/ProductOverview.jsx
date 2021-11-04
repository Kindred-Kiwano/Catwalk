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

// product that the page refers to
export var ProductOverview = () => {


  // -- LEFT OFF HERE --
  // don't open the page, it'll cause an infinite loop!
    // only want to rerender when we don't have all info to continue
    // once we have both the product and the styles, and ONLY then,
      // render the rest of the app



  // will give this .info and .styles just like the dummy data
  var Product = {};
  var [product, updateProduct] = React.useState(null);
  var [style, updateStyle] = React.useState(null);


  if (Product.info !== undefined && Product.styles !== undefined) {
    // render through
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

  } else if (Product.info === undefined && Product.styles !== undefined) {
    // get styles of first product
    getAllStyles(Product.info.id)
      .then((stylesResponse) => {
        Product.styles = stylesResponse;
        // rerender
        updateStyle(Product.styles[0]);
      })
      .catch((err) => {
        console.log(`error getting styles for product "${Product.info.name}"`);
        throw err;
      });

    return (
      <p>
        Loading product details...
      </p>
    );


  } else {
  // make network request to get 5 products
    elliotsGetAllProducts()
      .then((productsResponse) => {
        console.log('got a response!', productsResponse.data[0].id);
        // for now arbitrarilly choosing the first product
        Product.info = productsResponse.data[0];
        // rerender
        updateProduct(Product.info);
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

