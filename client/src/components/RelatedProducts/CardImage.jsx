import React from 'react';
import ReactDOM from 'react-dom';

const CardImage = (props) => {

  return (
    <img src={props.img}
      role='img'
      onClick={() => props.click(props.id)}
      title={props.description}
    />
  );
}



export default CardImage;
