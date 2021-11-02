import React from 'react';
import ReactDOM from 'react-dom';
// import Product from '../../../../fakeData/product.js';
// let { info } = Product;
import UserContext from './UserContext.jsx';
import Card from './Card.jsx';


const Carousel = (props) => {

  
  return (
    <div className="carousel">
      { props.list.map(prod => (
        <Card product={prod} key={prod.id} methods={props.methods} action={props.action}/>
      )) }
    </div>
  );
}

export default Carousel;