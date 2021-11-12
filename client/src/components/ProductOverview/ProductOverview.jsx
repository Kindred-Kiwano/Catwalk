// this file is the head component of the "product overview" tree

import React from 'react';
import CategoryAndName from './CategoryAndName/CategoryAndName.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import StyleSelect from './StyleSelect/StyleSelect.jsx';
import { postClickTracking } from '../../../../Shared/makeRequest.js';

// create a global contexts
// import Product from '../../../../fakeData/product.js';
export var FakeProduct = React.createContext();
export var Style = React.createContext();
export var ExpandedView = React.createContext();

document.querySelector('*').addEventListener('click', (event) => {
  var selector;
  var target = event.target;
  if (target.id.length) {
    selector = target.id;
  } else if (target.className.length) {
    selector = target.className;
  } else {
    selector = target.nodeName;
  }
  console.log('event target: ', event.target);
  //get other parent elements of the click
  //if that list includes
  var dataToSend = {
    element: selector,
    widget: 'ProductOverview',
    time: JSON.stringify(new Date())
  };

  postClickTracking(dataToSend);
});

// product that the page refers to
var ProductOverview = (props) => {

  var [product, updateProduct] = React.useState(props.productState);
  var [style, updateStyle] = React.useState(props.productState.styles.results[0]);
  var [expand, updateExpand] = React.useState(false);

  React.useEffect(()=>{
    // reset product
    console.log('CALLING USEEFFECT TO UPDATE PRODUCT');
    updateProduct(props.productState);
  }, [JSON.stringify(props.productState)]);

  React.useEffect(()=>{
    // reset styles
    console.log('CALLING USEEFFECT TO UPDATE STYLES');
    updateStyle(props.productState.styles.results[0]);
  }, [JSON.stringify(props.productState.styles.results[0])]);

  return (
    <div>
      <FakeProduct.Provider value={[product, updateProduct]}>
        <Style.Provider value={[style, updateStyle]} >
          <ExpandedView.Provider value={[expand, updateExpand]} >
            <div id="main-block" >
              <div id="top-cell">
                <CategoryAndName />
                <ProductInfo />
              </div>
              {/* has id="images-and-styles" */}
              <StyleSelect />
            </div>
          </ExpandedView.Provider>
        </Style.Provider>
      </FakeProduct.Provider>
    </div>
  );

};

export default ProductOverview;

