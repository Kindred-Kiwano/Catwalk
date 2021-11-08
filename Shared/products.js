const axios = require('../config/config.js');
const $ = require('jquery');

// Helpers for router and templating

module.exports = {
  getProducts: (params) => {
    params =
      params || {
        count: 5,
        page: 1
      }

    return axios.get(`/products`, params);
  },

  getRelatedIds: (id) => axios.get(`/products/${id}/related`),

  getProductInfo: (id) => axios.get(`/products/${id}`),

  getStyles: (id) => axios.get(`/products/${id}/styles`),

  formatFeatures: (array) => array.map(f => [f.feature].concat(f.value ? f.value : [])),

  formatInfo:  ({ name, slogan, description, category, default_price, original_price, features }) => {

    features = features && features.map(Object.entries)

    return {
      name,
      slogan,
      description,
      category,
      price: default_price || original_price,
      features
    };
  },

  formatStyles: async ({ results, product_id }) => {
    let formatted = {}
    formatted.id = Number(product_id);
    formatted.images = [];
    formatted.thumbnails = [];

    await results.forEach((style) => {
      let { sale_price, original_price, photos } = style;
      if (sale_price) { formatted.sale = sale_price }
      if (style['default?']) { formatted.price = original_price }
      formatted.default_price = original_price // just in case
      photos.forEach((p) => {
        !formatted.images.includes(p.url) && formatted.images.push(p.url);
        !formatted.thumbnails.includes(p.thumbnail_url) && formatted.thumbnails.push(p.thumbnail_url);
      })
    });
    formatted.img = formatted.images[0]
    return formatted
  },

  extendStyleToProduct: (style, data) => {
    return $.extend(style, data); // Not currently using this
  },

  parseArrayParams: (url) => {
    let path = url.split('/')
    let last = path.pop()
    let params = last.split(',').map(Number) //array of arguments to forward through '/all' route
    let prefix = path.join('/') // + '/'
    return [prefix, params]
  },

  hasArrayParams: url => url.includes(',')
};

