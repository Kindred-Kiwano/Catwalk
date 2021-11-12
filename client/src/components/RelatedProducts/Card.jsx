import React from 'react';
import ReactDOM from 'react-dom';
import CardButton from './CardButton.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';
import UserContext from './UserContext.jsx';
import Outfit from './Outfit.jsx';


let imgSrc = 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

const Card = (props) => {
  console.log(props, 'card props')
  let { product, label, click } = props;

  // let { name, default_price, style, category, description } = product;


  // let {button, click, list, update} = type;


  const handleClick = (id) => {
    update(id);
  };

  return (
    // <div className='card' id={id} onClick={() => update(product)}>
    <div className='card'>
      <header className='card'>
        <CardButton button={'★'} onClick={click} />
        <CardImage img={imgSrc} onClick={click} />
      </header>
      <CardInfo product={product} />
    </div>
  )
};

export default Card;