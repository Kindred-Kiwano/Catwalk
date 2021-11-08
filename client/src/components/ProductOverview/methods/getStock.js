import React from 'react';

// maps sizes in stock to all quantities a user can buy
var getStock = {
  // generates an object {size:qty}
  formatAllInStock: function(styleData) {
    if (getStock.hasNoneInStock(styleData)) {
      return {};
    }

    var skuObjects = styleData.skus;
    var sizesToQuantities = {};
    var currentSKU, sizeToQty;
    for (var key in skuObjects) {
      currentSKU = skuObjects[key];
      // usually, out of stock items are {quantity: null}
      if (currentSKU.quantity !== 0 && currentSKU.quantity !== null) {
        currentSKU = skuObjects[key];
        sizesToQuantities[currentSKU.size] = currentSKU.quantity;
      }
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
  generateQtyOptionsForAll: function(styleData) {

    var inStock = getStock.formatAllInStock(styleData);
    var allOptions = {};
    var optionsTuple;
    for (var size in inStock) {
      optionsTuple = getStock.generateQtyOptionsForSingleSKU(size, inStock);
      allOptions[optionsTuple[0]] = optionsTuple[1];
    }

    return allOptions;
  },

  // takes in a styleData object and returns the total in stock for all sizes
  getTotal: function(styleData) {
    var skusObject = styleData.skus;
    var total = 0;
    var sku;
    for (var key in skusObject) {
      sku = skusObject[key];
      total += sku.quantity;
    }
    return total;
  },

  hasNoneInStock: function(styleData) {
    var skuIDs = Object.keys(styleData.skus);
    return (skuIDs.length === 0) || (skuIDs.length === 1 && skuIDs[0] === 'null');
  }

};

export default getStock;
