// this file is the head component of the "product overview" tree

import React from 'react';
import CategoryAndName from './CategoryAndName/CategoryAndName.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Share from './Share/Share.jsx';
import StyleSelect from './StyleSelect/StyleSelect.jsx';


// create a global contexts
// import Product from '../../../../fakeData/product.js';
export var FakeProduct = React.createContext();
export var Style = React.createContext();

// product that the page refers to
export var ProductOverview = (props) => {
// props will hold the Product object
// {
//   .info: ...
//   .styles: ...
// }


  // -- LEFT OFF HERE --

    // only want to rerender when we don't have all info to continue
    // once we have both the product and the styles, and ONLY then,
      // render the rest of the app


  var [product, updateProduct] = React.useState(props.productState);
  console.log('all styles? ', props.productState.styles.data.results);
  var [style, updateStyle] = React.useState(props.productState.styles.data.results[0]);

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

