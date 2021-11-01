import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';

var Description = () => {
  var prod = React.useContext(FakeProduct);
  return (
    <div>
      <p>{prod.info.description}</p>
    </div>
  );
};

export default Description;