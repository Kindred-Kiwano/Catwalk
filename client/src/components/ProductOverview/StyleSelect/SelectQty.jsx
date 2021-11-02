import React from 'react';

// should determine how many the shopper can buy of the selected size
var SelectQty = (props) => {
  return (
    <div>
      <select>
        {props.qtyList.map((qty) => {
          return (<option value={qty}>{qty}</option>);
        })}
      </select>
    </div>
  );
};



export default SelectQty;