import React from 'react';
import ReactDOM from 'react-dom';
import Outfit from './Outfit.jsx';


const CardButton = (props) => (
  <button className='card-btn'
    role={'button'}
    onClick={props.click}
  >
    {props.buttonText}
  </button>
);

export default CardButton;