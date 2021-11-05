import React from 'react';
import CardButton from './CardButton.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';


const ProductCard = (props) => {
  let { type, product, label } = props;
  
  let img = 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

  return (
    <>
      <header className='card'>

        <CardImage img={img} onClick={() => console.log(product)}/>
      </header>
      <CardInfo product={product} />
    </>
  );
};


export default ProductCard;