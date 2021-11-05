import React from 'react';
import { Style } from '../ProductOverview.jsx';


var AddToCart = (props) => {

  var validateAddToCart = (event) => {
    // dont worry about if the item is out of stock - the button will be disabled and this function won't fire
    if (props.sizeSelected === 'Select size') {
      document.getElementById('reminder-to-select-size').innerHTML = 'Please select a size';
    } else {
      alert('added to cart!');
    }
  };


  // pull in the context of selected style
  var [style, updateStyle] = React.useContext(Style);
  // if the style selected has no sizes in stock, return an empty div
  var skuIDs = Object.keys(style.skus);
  if (skuIDs.length === 1 && skuIDs[0] === 'null') {
    return (
      <div></div>
    );
  } else {

    return (
      <div>
        {/* TODO project requirement: when reminding user to select a size on clicking add to cart, open the dropdown menu. *** Couldn't yet figure this out, come back to it later *** */}
        {/* TODO project requirement: hide button if selected style is out of stock */}
        {/* TODO project requirement: if both size and qty are valid, clicking the button should add the item(s) to the user's cart */}

        <button onClick={validateAddToCart}>
          Add To Cart
        </button>
      </div>
    );
  }



};

export default AddToCart;

