import React from 'react';
import ReactDOM from 'react-dom';

const CardImage = (props) => (
  <>
    <img src={props.img}
      role='img'
      z-index="0" />
  </>
);


export default CardImage;