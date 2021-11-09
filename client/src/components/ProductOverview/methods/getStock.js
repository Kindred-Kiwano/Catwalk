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


  // takes the quantities INT an returns an ARRAY of quantities a user can select
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

  // changes ALL the size keys from int to array
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

// export default getStock;


// we want an object {
//   S
//   M:
//   L: {
//     sku_id:
//     qty:
//   }
// }

var sample = {
  'style_id': 293509,
  'name': 'White',
  'original_price': '89.00',
  'sale_price': null,
  'default?': true,
  'photos': [
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2982&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80'
    },
    {
      'thumbnail_url': 'uhttps://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    }
  ],
  'skus': {
    '1702934': {
      'quantity': 14,
      'size': '7'
    },
    '1702935': {
      'quantity': 25,
      'size': '7.5'
    },
    '1702936': {
      'quantity': 9,
      'size': '8'
    },
    '1702937': {
      'quantity': 2,
      'size': '8.5'
    },
    '1702938': {
      'quantity': 18,
      'size': '9'
    },
    '1702939': {
      'quantity': 12,
      'size': '9.5'
    },
    '1702940': {
      'quantity': 10,
      'size': '10'
    },
    '1702941': {
      'quantity': 18,
      'size': '10.5'
    },
    '1702942': {
      'quantity': 11,
      'size': '11'
    },
    '1702943': {
      'quantity': 4,
      'size': '11.5'
    },
    '1702944': {
      'quantity': 25,
      'size': '12'
    }
  }
};

// var result = getStock.generateQtyOptionsForAll(sample);
// console.log(result);