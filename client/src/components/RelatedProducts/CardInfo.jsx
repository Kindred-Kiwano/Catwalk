import React from 'react';
import ReactDOM from 'react-dom';


const CardInfo = (props) => (
  <>
    <div className='card-category'> { props.category.toUpperCase() } </div>
    <div className='card-name'> {props.name} </div>
    <div className='card-price' sale={props.sale} range={[0,1]}> {`$${props.price.split('.')[0]}`} </div>
  </>
);

export default CardInfo;