import React from 'react';
import ProductCard from './ProductCard.jsx';
import CardButton from './CardButton.jsx';

const Card = (props) => {

  let { product, method, label } = props;
  let { click } = method;

  return (
    <div className={`card card-${label}`}>
      <CardButton label={label} click={click}/>
      {/* <CardButton label={label} click={()=>click(product)}/> */}
      { product ?
        <ProductCard {...{product, label}}/>
        :
        <></>
      }
    </div>
  );
};

export default Card;