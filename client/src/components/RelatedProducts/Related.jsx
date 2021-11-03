import React from 'react';
// import Carousel from './Carousel.jsx';

import axios from '../../../../config/config.js';

import productList from '../../../../fakeData/productList.js';

const Related = {};

Related.getRelated = (id) => {
  return axios.get(`/products/${id}/related`)
    .catch(e => console.log(e));
};

Related.getFeatures = (id) => {
  return axios.get(`/products/${id}`)
    .catch(e => console.log(e));
};

Related.getStyles = (id) => {
  return axios.get(`/products/${id}/styles`)
    .catch(e => console.log(e));
};

Related.populateAsync = (arr, cb) => {
  return Promise.all(arr.map(a => cb(a)))
    .catch(e => console.log(e));
};



export default Related;
