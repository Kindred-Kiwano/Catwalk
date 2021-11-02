import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';
import getStock from '../methods/getStock.js';

var SelectSize = (props) => {
  console.log('sizes and amounts generated: ', props.sizesAndAmounts);
  return (
    <div>
      {/* render all available sizes in a dropdown */}
      <select onChange={props.handleSizeSelection} >
        {Object.keys(props.sizesAndAmounts).map((size) => {
          return (<option value={size}>{size}</option>);
        })}
      </select>
    </div>
  );
};


export default SelectSize;

