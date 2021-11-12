import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';

var CategoryAndName = () => {
  var [product, updateProduct] = React.useContext(FakeProduct);

  return (
    <div id='category-name'>
      <h3>{ `${product.info.category} > ${product.info.name}` }</h3>
    </div>
  );

};

export default CategoryAndName;
