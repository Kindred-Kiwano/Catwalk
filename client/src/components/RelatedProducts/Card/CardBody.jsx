import React from 'react';
import CardButton from './CardButton.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';


const CardBody = (props) => {
  let { button, click, img, product, type } = props;
  return (
    <>
      <header className='card'>
        <CardButton button={button} onClick={() => click(product)} />
        <CardImage img={img} onClick={() => console.log(product)}/>
      </header>
      <CardInfo product={product} />
    </>
  );
};


export default CardBody;