import React from 'react';
import { Style } from '../ProductOverview.jsx';
import getStock from '../methods/getStock.js';
import { addToCart } from '../../../../../Shared/makeRequest.js';

var AddToCart = (props) => {

  var validateAndAddToCart = (event) => {
    if (props.sizeSelected === 'Select size') {
      document.getElementById('reminder-to-select-size').innerHTML = 'Please select a size';
    } else {
      var selected_sku_id = props.sizesObject[props.sizeSelected].sku_id;
      addToCart(selected_sku_id)
        .then((response) => {
          alert('Added to cart!');
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  var [style, updateStyle] = React.useContext(Style);

  if (getStock.hasNoneInStock(style)) {
    return (
      <div></div>
    );
  } else {
    return (
      <div id="add-to-cart-container">
        <button id="add-to-cart" data-testid="add-to-cart" onClick={validateAndAddToCart}>
          Add To Cart
        </button>
        <p id="reminder-to-select-size"></p>
      </div>
    );
  }

};

export default AddToCart;
