import React from 'react';
import Card from './Card/Card.jsx';
import UserContext from './UserContext.jsx';

import './styles/carouselStyle.css';


const Carousel = (props) => {

  let { method, label, data, title } = props;
  console.log(props)

  if (label === 'addToOutfit') {
    data = [<Card {...props} />, ...data]; //not quite
  }

  return (
    <>
      <div id={`carousel-${label}`}>
        <header title={title}><h3>{title}</h3></header>
        <div className={'carousel'} id={`carousel-${label}`}>
          {
            data ? data.map(prod => (
              <Card product={prod}
                label={label}
                method={method[label]}
              />
            )) : <h3>Loading</h3>
          }
        </div>
      </div>
    </>
  );
};

export default Carousel;
