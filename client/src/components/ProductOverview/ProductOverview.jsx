// this file is the head component of the "product overview" tree

import React from 'react';
import CategoryAndName from './CategoryAndName/CategoryAndName.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import StyleSelect from './StyleSelect/StyleSelect.jsx';


// create a global contexts
// import Product from '../../../../fakeData/product.js';
export var FakeProduct = React.createContext();
export var Style = React.createContext();
export var ExpandedView = React.createContext();

// product that the page refers to
var ProductOverview = (props) => {

  var [product, updateProduct] = React.useState(props.productState);
  var [style, updateStyle] = React.useState(props.productState.styles.results[0]);
  var [expand, updateExpand] = React.useState(false);

  return (
    <div>
      <FakeProduct.Provider value={[product, updateProduct]}>
        <Style.Provider value={[style, updateStyle]} >
          <ExpandedView.Provider value={[expand, updateExpand]} >
            <div id="main-block">
              <div id="top-cell">
                <CategoryAndName />
                <ProductInfo />
              </div>
              <div id="bottom-cell">
                <StyleSelect />
              </div>
            </div>
          </ExpandedView.Provider>
        </Style.Provider>
      </FakeProduct.Provider>
    </div>
  );

};

export default ProductOverview;

