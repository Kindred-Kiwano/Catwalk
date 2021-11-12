import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../../../../fakeData/product.js';
import productList from '../../../../fakeData/productList.js';

import {fakeProductList} from './data.js';

import UserContext from './UserContext.jsx';
import Card from './Card.jsx';


import './styles/carouselStyle.css';
import './styles/modalStyle.css';

const Carousel = (props) => {

  console.log(fakeProductList)

  let {list, type} = props.data;

  if (type === 'outfit') {
    list = [...list];
  }
  let {info, styles} = Product;

  list = fakeProductList;

  return (
    <main className="carousel">
      { list.map(prod => (
        <Card product={prod} type={type} key={prod.id} />
      )) }
    </main>
  );
};

export default Carousel;