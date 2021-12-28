import React from 'react';
import { CurrentProduct } from '../ProductOverview.jsx';

var Description = () => {
  var [product, updateProduct] = React.useContext(CurrentProduct);
  return (
    <div id="description">
      <p>{product.info.description}</p>
    </div>
  );
};

export default Description;
