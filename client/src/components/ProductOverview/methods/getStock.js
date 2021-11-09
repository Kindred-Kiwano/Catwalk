// import React from 'react';

// maps sizes in stock to all quantities a user can buy
var getStock = {
  // generates an object {size: {qty: x, sku_id: y}}
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
        // currentSKU = skuObjects[key];
        sizesToQuantities[currentSKU.size] = {};
        sizesToQuantities[currentSKU.size].sku_id = key;
        sizesToQuantities[currentSKU.size].quantities = currentSKU.quantity;
      }
    }

    return sizesToQuantities;
  },


  // takes the quantities INT an returns an ARRAY of ints (quantities) a user can select
  generateQtyOptionsForSingleSKU: function(qty) {
    var displayAmount;
    if (qty > 15) {
      displayAmount = 15;
    } else {
      displayAmount = qty;
    }

    var quantities = [];
    for (var i = 1; i <= displayAmount; i++) {
      quantities.push(i);
    }

    return quantities;
  },

  // changes ALL the size keys from int to array of ints
  generateQtyOptionsForAll: function(styleData) {

    var inStock = getStock.formatAllInStock(styleData);
    for (var size in inStock) {
      // change the qty field to an array
      inStock[size].quantities = getStock.generateQtyOptionsForSingleSKU(inStock[size].quantities);
    }

    return inStock;
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




// var result = getStock.generateQtyOptionsForAll(sample);
// console.log(result);
