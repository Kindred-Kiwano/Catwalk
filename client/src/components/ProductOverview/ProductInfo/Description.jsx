import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';

var Description = () => {
  var [product, updateProduct] = React.useContext(FakeProduct);
  return (
    <div>
      {/* possible TODO hide this <p> if description is null  */}
      <p>{product.info.description}</p>
    </div>
  );
};

export default Description;
