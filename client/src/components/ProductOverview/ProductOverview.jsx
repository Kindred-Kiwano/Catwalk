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

  // updateProduct in call to useEffect once we get back the product info
  var [product, updateProduct] = React.useState();

  // updateStyle above in call to useEffect once we get the product styles :)
  var [style, updateStyle] = React.useState();

  // will give this .info and .styles just like the dummy data
  var Product = {};
  // now we make a networdk request to update the product
  React.useEffect(() => {
    // make network request to get 5 products
    elliotsGetAllProducts()
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log('got an error fetching from API');
      throw err;
    });
    // then:
      // use the resulting product id of the first one
      // give response to Product.info
    // then:
      // then make a request to get the styles of that product
      // give response to Product.styles
      // updateProduct(complete Product object)


  });




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
};

