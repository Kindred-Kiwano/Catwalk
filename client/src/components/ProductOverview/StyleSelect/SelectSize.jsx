import React from 'react';

var SelectSize = (props) => {

  return (
    <div>
      {/* TODO project requirement: if none of selected style in stock, the drowdown should become disabled and read "OUT OF STOCK" */}
      <p id="reminder-to-select-size"></p> {/* insert text here if user tries adding to cart before selecting */}
      <select onChange={props.handleSizeSelection} >
        <option>Select size</option>
        {Object.keys(props.sizesAndAmounts).map((size) => {
          return (<option value={size}>{size}</option>);
        })}
      </select>
    </div>
  );
};


export default SelectSize;

