import React from 'react';

var SelectQty = (props) => {

  if (props.sizeSelected === 'Select size') {
    return (
      <div>
        <select disabled>
          <option>-</option>
        </select>
      </div>
    );
  } else {
    return (
      <div id="select-quantity-container">
        <select id="select-quantity">
          {props.qtyList.map((qty) => {
            return (<option value={qty}>{qty}</option>);
          })}
        </select>
      </div>
    );
  }
};

export default SelectQty;
