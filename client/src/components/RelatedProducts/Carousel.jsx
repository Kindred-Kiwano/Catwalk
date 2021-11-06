import React from 'react';
import Card from './Card/Card.jsx';
import UserContext from './UserContext.jsx';

import './styles/carouselStyle.css';


const Carousel = (props) => {
  console.log(props);
  let { method, label, data, title } = props;

  let list = data ? data.map(prod => (
    <Card product={prod}
      label={label}
      method={method[label]}
    />
  )) : <></>;

  if (label === 'outfit') {
    list = [ <Card label={'addToOutfit'} method={method.addToOutfit}/> ].concat(list);
  } //fix CSS so this doesn't collapse when adding new products

  return (
    <>
      <div id={`carousel-${label}`}>
        <header title={title}><h3><a href='/products/61590'>{title}</a></h3></header>
        <div className={'carousel'} id={`carousel-${label}`}>
          { list }
        </div>
      </div>
    </>
  );
};

export default Carousel;
