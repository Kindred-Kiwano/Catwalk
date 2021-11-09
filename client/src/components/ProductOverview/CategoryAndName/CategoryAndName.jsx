import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';

var CategoryAndName = () => {
  var [product, updateProduct] = React.useContext(FakeProduct);

  return (
    <div id='category-name'>
      <p>{ `${product.info.category} > ${product.info.name}` }</p>
    </div>
  );

};

export default CategoryAndName;
