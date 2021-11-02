import React from 'react';
import ReactDOM from 'react-dom';


const CardButton = (props) => {
  return (
    <button className='card-btn'
      // onClick={props.click}
      onClick={e=>console.log(e.target)}
      value={props.id}>{props.value}</button>
  );
};

export default CardButton;