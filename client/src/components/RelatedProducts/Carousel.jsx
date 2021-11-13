import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../../../../fakeData/product.js';
import productList from '../../../../fakeData/productList.js';
// import { fakeProductList } from './utils/data.js'


import { fakeProductList } from './data.js';
import { relatedProps, outfitProps, addToOutfitProps } from './utils/props.js';

import UserContext from './UserContext.jsx';
import Card from './Card.jsx';


import './styles/carouselStyle.css';

const Carousel = (props) => {

  // console.log(props.data, 'carousel props')

  let { list, data, label, title, method, update } = props;
  let click = method[label]

  if (label === 'outfit') {
    // list = [...list];
  }
  let { info, styles } = Product;

  // list = fakeProductList;

  return (
    <>
      <header><h2>{title}</h2></header>
      <main className="carousel" id={label + '-carousel'} title={title}>
        {data.map(prod => (
          <Card product={prod} label={label} key={prod.id} click={click} update={update} />
        ))}
      </main>
    </>
  );
};

export default Carousel;
