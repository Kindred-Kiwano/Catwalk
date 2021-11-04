import React from 'react';
import CardBody from './CardBody.jsx';


let imgSrc = 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

const Card = (props) => {
  let { product, type, button, click } = props;

  let { id, name, default_price, sale_price, style, category, description } = product;

  let img = imgSrc;

  return (
    <div className={`card card-${type}`} onClick={() => click(product)}>
      <CardBody {...props} click={click} img={img} button={button}/>
    </div>
  );
};

export default Card;