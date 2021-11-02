import React from 'react';
import ReactDOM from 'react-dom';


const CardButton = (props) => (
  <button className='card-btn'
    // onClick={props.click}
    value={props.value}>
    {props.value}
  </button>
);

export default CardButton;