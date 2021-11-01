import React from 'react';
import Carousel from './Carousel.jsx'

import { getAllProducts, getRelatedProducts } from '../../../../Shared/makeRequest.js';
import axios from '../../../../config/config.js';
import './styles/style.css';

import productList from '../../../../fakeData/productList.js';

var Related = {};

Related.get = (id) => {
  return axios.get(`/products/${id}/related`); //returns a promise
};

Related.getFeatures




export const RelatedProducts = () => (
  <Carousel list={productList} />
);