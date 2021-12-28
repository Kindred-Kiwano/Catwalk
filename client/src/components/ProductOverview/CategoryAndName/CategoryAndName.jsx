import React from 'react';
import { CurrentProduct } from '../ProductOverview.jsx';

var CategoryAndName = () => {
  var [product, updateProduct] = React.useContext(CurrentProduct);

  return (
    <div id='category-name'>
      <h3>{ `${product.info.category} > ${product.info.name}` }</h3>
    </div>
  );
};

export default CategoryAndName;
