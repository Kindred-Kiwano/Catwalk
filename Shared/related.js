const axios = require('../config/config.js');
const $ = require('jquery');

module.exports = {

  getRelatedIds: (id) => {
    return axios.get(`/products/${id}/related`);
  },

  getProductData: (id) => {
    return axios.get(`/products/${id}`);
  },

  getStyles: (id) => {
    return axios.get(`/products/${id}/styles`);
  },

  formatStyle: (prod) => {
    let {results, product_id} = prod;
    let p = results[0];
    let {
      sale_price,
      original_price,
      photos
    } = p;
    return {
      id: product_id,
      sale: sale_price,
      price: original_price,
      default_price: original_price,
      images: photos.map(p => p.url),
      img: photos[0].url
    };
  },

  formatStyles: (prod) => {
    let {results, product_id} = prod;

    return results.map(p => {
      let {
        sale_price,
        original_price,
        photos
      } = p;
      return {
        id: Number(product_id),
        sale: sale_price, // conditionally render
        price: original_price,
        default_price: original_price,
        images: photos.map(p => p.url),
        img: photos[0].url
      }; // extend with more data
    });
  },

  extendStyleToProduct: (data, style) => {
    return $.extend(data, style);
  }

};

// Helpers for router and formatting 