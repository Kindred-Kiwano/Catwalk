var getStock = {
  formatAllInStock: function(styleData) {
    if (getStock.hasNoneInStock(styleData)) {
      return {};
    }

    var skuObjects = styleData.skus;
    var sizesToQuantities = {};
    var currentSKU, sizeToQty;
    for (var key in skuObjects) {
      currentSKU = skuObjects[key];
      if (currentSKU.quantity !== 0 && currentSKU.quantity !== null) {
        sizesToQuantities[currentSKU.size] = {};
        sizesToQuantities[currentSKU.size].sku_id = key;
        sizesToQuantities[currentSKU.size].quantities = currentSKU.quantity;
      }
    }

    return sizesToQuantities;
  },

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

  generateQtyOptionsForAll: function(styleData) {

    var inStock = getStock.formatAllInStock(styleData);
    for (var size in inStock) {
      inStock[size].quantities = getStock.generateQtyOptionsForSingleSKU(inStock[size].quantities);
    }

    return inStock;
  },

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
