import React from 'react';

// should determine how many the shopper can buy of the selected size
var SelectQty = (props) => {
  return (
    <div>
      <select>

        {/* then map thru the array generating an <option value="x" >x</option> for each number */}
        {props.availableQuantities.map((qty) => {
          return (<option value={qty}>{qty}</option>);
        })}
      </select>
    </div>
  );
};



export default SelectQty;