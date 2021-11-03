import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';

var CategoryAndName = () => {
  var [product, updateProduct] = React.useContext(FakeProduct);

  return (
    <div>
      <h4>CATEGORY AND NAME SUBCOMPONENT</h4>
      <p>{ `${product.info.category} > ${product.info.name}` }</p>
    </div>
  );

};

export default CategoryAndName;
