import React from 'react';

// should determine how many the shopper can buy of the selected size
var SelectQty = (props) => {
  return (
    <div>
      <select>
        {/* TODO project requirement: dropdown should be disabled until a size is selected (already took care of displaying "-") */}
        {props.qtyList.map((qty) => {
          return (<option value={qty}>{qty}</option>);
        })}
      </select>
    </div>
  );
};



export default SelectQty;