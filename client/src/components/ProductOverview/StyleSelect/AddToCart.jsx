import React from 'react';
import { Style } from '../ProductOverview.jsx';
import getStock from '../methods/getStock.js';
import { addToCart } from '../../../../../Shared/makeRequest.js';


var AddToCart = (props) => {

  var validateAndAddToCart = (event) => {
    // dont worry about if the item is out of stock - the button will be disabled and this function won't fire
    if (props.sizeSelected === 'Select size') {
      document.getElementById('reminder-to-select-size').innerHTML = 'Please select a size';
    } else {
      var selected_sku_id = props.sizesObject[props.sizeSelected].sku_id;
      console.log('adding skuID to cart: ', selected_sku_id);
      addToCart(selected_sku_id)
        .then((response) => {
          console.log('post successful! ', response);
          alert('Added to cart!');
        })
        .catch((err) => {
          console.log('error adding to cart');
          throw err;
        });
    }
  };


  // pull in the context of selected style
  var [style, updateStyle] = React.useContext(Style);
  // if the style selected has no sizes in stock, return an empty div

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

