import React from 'react';
import { fakeProductList } from './data.js';
import { relatedProps, outfitProps, addToOutfitProps } from './utils/props.js';

import UserContext from './UserContext.jsx';
import Card from './Card.jsx';


import './styles/carouselStyle.css';

const Carousel = (props) => {
  console.log(props)
  let { list, data, label, title, method, update } = props;
  let click = method[label];

  let renderedList = data.map(prod =>
    <Card product={prod} label={label} key={prod.id} click={click} update={update} /> )

  if (label === 'outfit') {
    // renderedList = [<Card />, ...renderedList];
  }

  return (
    <>
      <header className='carousel'><h2>{title}</h2></header>
      <main className='carousel' id={label + '-carousel'} title={title}>
        {
          renderedList
        }
      </main>
    </>
  );
};

export default Carousel;
