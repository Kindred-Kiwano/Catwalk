import React from 'react';

import axios from '../../../../config/config.js';

import productList from '../../../../fakeData/productList.js';

const Related = {};

Related.getRelated = (id) => {
  return axios.get(`/products/${id}/related`)
    .catch(e => console.log(e));
};

Related.getFeatures = (id) => {
  return axios.get(`/products/${id}`)
    .then(product => product.data.features)
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

Related.modal = (current, target) => {
  var comparisons = {};
  Related.getFeatures(current)
    .then(list => comparisons[current] = list)
    .then(Related.getFeatures(target))
    .then(list => comparisons[target] = list)
    .then(() => comparisons)
    // .then(stats => stats.forEach(stat => {
    //   comparisons[stat['feature']] = stat['value'] || '';
    // }))
    // .then(() => console.log(comparisons))
    .catch(err => console.log(err));

};


export default Related;
