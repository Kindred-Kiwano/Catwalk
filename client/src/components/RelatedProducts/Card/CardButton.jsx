import React from 'react';
import ReactDOM from 'react-dom';
import Outfit from '../Outfit.jsx';


const CardButton = (props) => (
  <button className='card-btn'
    role={'button'}
  >
    {props.button}
  </button>
);

export default CardButton;