import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../../../../fakeData/product.js';
import productList from '../../../../fakeData/productList.js';
import UserContext from './UserContext.jsx';
import Card from './Card.jsx';
import './styles/carouselStyle.css';
import './styles/modalStyle.css';

const Carousel = (props) => {

  let {list, type} = props.data;

  if (type === 'outfit') {
    list = [...list];
  }
  let {info, styles} = Product;

  list = productList

  return (
    <div className="carousel">
      { list.map(prod => (
        <Card product={prod} type={type} key={prod.id} />
      )) }
    </div>
  );
};

export default Carousel;