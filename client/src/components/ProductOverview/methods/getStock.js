import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';

// maps sizes in stock to all quantities a user can buy
var getStock = {
  // generates an object {size:qty}
  formatAllInStock: function(productData) {
    // get all SKUS of the selected product
    // HARDCODED RN, CHANGE ONCE GETTING API INFO
    var skuObjects = productData.styles.results[0].skus;
    var sizesToQuantities = {};
    var currentSKU, sizeToQty;
    for (var key in skuObjects) {
      currentSKU = skuObjects[key];
      if (currentSKU.quantity !== 0) {
        currentSKU = skuObjects[key];
        sizesToQuantities[currentSKU.size] = currentSKU.quantity;
      }
    }

    if (Object.keys(sizesToQuantities).length === 0) {
      sizesToQuantities['OUT OF STOCK'] = 0;
    }

    return sizesToQuantities;
  },


  // returns a tuple [size, [qty options list]]
  generateQtyOptionsForSingleSKU: function(sizeSelected, sizeToQty) {
    var amountInStock = sizeToQty[sizeSelected];
    var displayAmount;
    if (amountInStock > 15) {
      displayAmount = 15;
    } else {
      displayAmount = amountInStock;
    }

    var qtyOptions = [];
    for (var i = 1; i <= displayAmount; i++) {
      qtyOptions.push(i);
    }

    return [sizeSelected, qtyOptions];
  },

  // returns an object {size: [list of quantities]}
  generateQtyOptionsForAll: function(productData) {
    var inStock = getStock.formatAllInStock(productData);
    var allOptions = {};
    var optionsTuple;
    for (var size in inStock) {
      optionsTuple = getStock.generateQtyOptionsForSingleSKU(size, inStock);
      allOptions[optionsTuple[0]] = optionsTuple[1];
    }

    return allOptions;
  }
};

export default getStock;
