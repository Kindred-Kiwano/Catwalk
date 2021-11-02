import React from 'react';
import ReactDOM from 'react-dom';
import Outfit from './Outfit.jsx';

const CardButton = (props) => (
  <button className='card-btn'>
    {props.value}
  </button>
);

export default CardButton;