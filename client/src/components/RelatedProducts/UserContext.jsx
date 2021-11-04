import React from 'react';
import axios from '../../../../config/config.js';

import {outfit, related} from './Outfit.jsx';

var context = {};

var outfitList = [];

var updateRelatedProducts = (id) => {
  var products;
  axios.get(`/products/${id}/related`)
    .then(ids => related.populateAsync(ids.data, related.getData))
    .then(success => products = success)
    .catch(err => console.log(err));
  return products;
};

context.currentProduct = 61590;

var relatedProductList = updateRelatedProducts(context.currentProduct);

outfit.list = [];
outfit.button = 'ⓧ';
outfit.click = (product) => [...this.list, product];

related.button = '★';
related.list = [];
related.click = () => {};

context.outfit = outfit;
context.related = related;

const UserContext = React.createContext(context);

var carouselType = {
  outfit: {
    list: userOutfit,
    click: (product) => {
      setUserOutfit(userOutfit.filter(prod => prod.id !== product.id));
    }
  },
  related: {
    list: relatedProducts,
    click: (product) => {
      setUserOutfit([...userOutfit, product]);
    }
  }
};



export default UserContext;
