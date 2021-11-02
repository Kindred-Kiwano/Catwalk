import React from 'react';
import ReactDOM from 'react-dom';

import Outfit from './Outfit.jsx';
import Related from './Related.jsx';
import Carousel from './Carousel.jsx';

import Card from './Card.jsx';

import productList from '../../../../fakeData/productList.js';


var initialState = {
  currentProduct: 61587,
  products: productList,
  outfit: [],
  related: [],
  methods: Outfit
};

const UserContext = React.createContext(initialState);

export default UserContext;