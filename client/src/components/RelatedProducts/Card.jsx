import React from 'react';
import ReactDOM from 'react-dom';
import CardButton from './CardButton.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';
import UserContext from './UserContext.jsx';
import Outfit from './Outfit.jsx';
import { relatedProps, outfitProps, addToOutfitProps } from './utils/props.js';


let imgSrc = 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

const Card = (props) => {
  console.log(props, 'card props')
  let { product, label, click } = props;


  const handleClick = (id) => {
    update(id);
  };

  return (
    <div className='card'>
      <header className='card'>
        <CardButton buttonText={'★'} click={click.click} />
        <CardImage img={imgSrc} click={click.click} />
      </header>
      <CardInfo product={product} />
    </div>
  );
};

export default Card;