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
      // make API post
      // LEFT OFF HERE, INCLUDE THE SKU ID IN STATE
      // get current state of selected size and add to cart
      var selected_sku_id = props.sizesObject[props.sizeSelected].sku_id;
      console.log('adding skuID to cart: ', selected_sku_id);
      addToCart(selected_sku_id)
        .then((response) => {
          console.log('post successful! ', response);
          alert('added to cart!');
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
      <div>
        {/* TODO project requirement: when reminding user to select a size on clicking add to cart, open the dropdown menu. *** Couldn't yet figure this out, come back to it later *** */}

        <button data-testid="add-to-cart" onClick={validateAndAddToCart}>
          Add To Cart
        </button>
      </div>
    );
  }



};

export default AddToCart;

