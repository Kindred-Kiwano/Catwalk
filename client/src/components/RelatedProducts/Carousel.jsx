import React from 'react';
import Card from './Card/Card.jsx';
import ProductCard from './Card/ProductCard.jsx';
import UserContext from './UserContext.jsx';

import './styles/carouselStyle.css';


const Carousel = (props) => {
  let { method, label, data, title } = props;
  let click = method[label];

  let list = data ? data.map(id => (
    <ProductCard {...{label, click, id}} />
  )) : <></>;

  if (label === 'outfit') {
    list = [ <Card label={'addToOutfit'} click={method.addToOutfit}/> ].concat(list);
  }
  //fix CSS so this doesn't collapse when adding new products

  return (
    <>
      <div id={`carousel-${label}`} className={'carousel container'}>
        <header title={title}><h3><a href='/products/related/61588'>{title}</a></h3></header>
        <div className={'carousel'} id={`carousel-${label}`}>
          { list }
        </div>
      </div>
    </>
  );
};

export default Carousel;
