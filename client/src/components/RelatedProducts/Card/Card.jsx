import React from 'react';
import ProductCard from './ProductCard.jsx';
import CardButton from './CardButton.jsx';

const Card = (props) => {

  let { product, method, label, img } = props;
  let { click } = method;

  return (
    <div className={`card card-${label}`}>
      { product ?
        <>
          <CardButton label={label} click={()=>click(product)}/>
          <ProductCard {...{product, label, img}}/>
        </>
        :
        <CardButton label={label} click={click}/>
      }
    </div>
  );
};

export default Card;