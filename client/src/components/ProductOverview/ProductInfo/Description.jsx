import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';

var Description = () => {
  var [product, updateProduct] = React.useContext(FakeProduct);
  return (
    <div>
      <p>{product.info.description}</p>
    </div>
  );
};

export default Description;
