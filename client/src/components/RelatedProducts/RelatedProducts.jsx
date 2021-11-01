import React from 'react';
import Carousel from './Carousel.jsx';

import { getAllProducts, getRelatedProducts } from '../../../../Shared/makeRequest.js';
import axios from '../../../../config/config.js';
import './styles/style.css';

import productList from '../../../../fakeData/productList.js';

const RelatedProducts = () => {};

RelatedProducts.getRelated = (id) => {
  return axios.get(`/products/${id}/related`)
    .catch(e => console.log(e));
};

RelatedProducts.getFeatures = (id) => {
  return axios.get(`/products/${id}`)
    .catch(e => console.log(e));
};

RelatedProducts.populateAsync = (arr, cb) => {
  return Promise.all(arr.map(a => cb(a)))
    .catch(e => console.log(e));
};


export default RelatedProducts;
