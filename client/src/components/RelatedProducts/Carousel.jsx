import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import Product from '../../../../fakeData/product.js';
import productList from '../../../../fakeData/productList.js';
let { info } = Product;
import Card from './Card.jsx';

const Carousel = (props) => {

  //props is a state value - array of objects

  return (
    <div className="carousel">
      <Card product={info} click={props.click}/>
      <Card product={info}/>
      <Card product={info}/>
    </div>
  );
};

export default Carousel;