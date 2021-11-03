import React from 'react';
import ReactDOM from 'react-dom';
// import Product from '../../../../fakeData/product.js';
import UserContext from './UserContext.jsx';
import Card from './Card/Card.jsx';

const Carousel = (props) => {

  let {list, type} = props;

  if (type === 'outfit') {
    list = [...list];
  }

  return (
    <div className="carousel">
      { list.map(prod => (
        <Card product={prod} type={type} key={prod.id} />
      )) }
    </div>
  );
};

export default Carousel;