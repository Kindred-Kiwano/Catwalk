import React from 'react';
import ReactDOM from 'react-dom';
import CardButton from './CardButton.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';
import UserContext from '../UserContext.jsx';
import Outfit from '../Outfit.jsx';


let imgSrc = 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

const Card = (props) => {
  let { product, type } = props;

  let { id, name, default_price, style, category, description } = product;


  let {button, click, list, update} = type;

  if (type === 'outfit') {
    list = [...list]
  }

  const handleClick = (id) => {
    update(id);
  };

  return (
    <div className='card' id={id} onClick={() => update(product)}>
      <header className='card'>
        <CardButton button={button} onClick={() => update(product)} />
        <CardImage img={imgSrc} onClick={() => console.log(product)}/>
      </header>
      <CardInfo product={product} />
    </div>
  );
};

export default Card;