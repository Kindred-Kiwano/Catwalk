import React from 'react';
import ReactDOM from 'react-dom';

const CardImage = (props) => (
  <img src={props.img}
    role='img'
    onClick={props.click}
    title={props.description}
  />
);



export default CardImage;
