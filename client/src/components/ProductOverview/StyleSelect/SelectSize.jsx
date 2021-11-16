import React from 'react';

var SelectSize = (props) => {
  var sizes = Object.keys(props.sizesObject);
  if (!sizes.length) {
    return (
      <div>
        <select disabled>
          <option>OUT OF STOCK</option>
        </select>
      </div>
    );
  } else {
    return (
      <div id="select-size-container">
        <select id="select-size" onChange={props.handleSizeSelection} >
          <option>Select size</option>
          {sizes.map((size) => {
            return (<option value={size}>{size}</option>);
          })}
        </select>
      </div>
    );
  }
};

export default SelectSize;
