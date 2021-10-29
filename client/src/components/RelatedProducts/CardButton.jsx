import React from 'react';
import ReactDOM from 'react-dom';


const CardButton = (props) => {
  return (
    <button className='card card-btn'
      onClick={props.click}
      z-index={1}
      value={props.value}>{props.value}</button>
  );
};

export default CardButton;