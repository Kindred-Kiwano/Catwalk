import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';
import getStock from '../methods/getStock.js';

var SelectSize = () => {
  var prod = React.useContext(FakeProduct);
  return (
    <div>
      {getAvailableSizes(prod)}
    </div>
  );
};


export default SelectSize;

