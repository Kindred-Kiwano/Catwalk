import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../../../../fakeData/product.js';
import productList from '../../../../fakeData/productList.js';


import { fakeProductList } from './data.js';

import UserContext from './UserContext.jsx';
import Card from './Card.jsx';


import './styles/carouselStyle.css';

const Carousel = (props) => {

  console.log(props, 'carousel props')

  let { list, label, title, method } = props;
  let click = method[label]

  if (label === 'outfit') {
    // list = [...list];
  }
  let { info, styles } = Product;

  list = fakeProductList;

  return (
    <>
      <header><h2>{title}</h2></header>
      <main className="carousel" id={label + '-carousel'} title={title}>
        {list.map(prod => (
          <Card product={info} label={label} key={prod.id} click={click} />
        ))}
      </main>
    </>
  );
};

export default Carousel;
