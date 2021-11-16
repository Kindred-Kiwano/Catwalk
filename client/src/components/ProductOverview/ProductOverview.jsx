import React from 'react';
import './styles.css';
import CategoryAndName from './CategoryAndName/CategoryAndName.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import StyleSelect from './StyleSelect/StyleSelect.jsx';
import { postClickTracking } from '../../../../Shared/makeRequest.js';

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

  var dataToSend = {
    element: selector,
    widget: 'product overview',
    time: JSON.stringify(new Date())
  };

  postClickTracking(dataToSend);
});

var ProductOverview = (props) => {

  var [product, updateProduct] = React.useState(props.productState);
  var [style, updateStyle] = React.useState(props.productState.styles.results[0]);
  var [expand, updateExpand] = React.useState(false);

  React.useEffect(() => {
    updateProduct(props.productState);
    updateStyle(props.productState.styles.results[0]);
  }, [props.productState.info.id]);

  return (
    <div>
      <FakeProduct.Provider value={[product, updateProduct]} >
        <Style.Provider value={[style, updateStyle]} >
          <ExpandedView.Provider value={[expand, updateExpand]} >
            <div id="main-block" >
              <div id="top-cell">
                <CategoryAndName />
                <ProductInfo />
              </div>
              <StyleSelect />
            </div>
          </ExpandedView.Provider>
        </Style.Provider>
      </FakeProduct.Provider>
    </div>
  );
};

export default ProductOverview;
