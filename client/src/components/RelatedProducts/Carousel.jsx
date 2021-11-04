import React from 'react';
import Card from './Card/Card.jsx';
import UserContext from './UserContext.jsx';
import './styles/carouselStyle.css';


const Carousel = (props) => {
  let { type, name } = props;
  let list = props.data;
  let { button, click } = type[name];

  return (
    <div className={`carousel`} id={`carousel-${name}`}>
      {
        list ? list.map(prod => (
          <Card product={prod}
            name={name}
            type={type[name]}
            button={button}
            click={click} />
        )) : <h3>Loading</h3>
      }
    </div>
  );
};

export default Carousel;

// var carouselType = {
  // outfit: {
  //   list: userOutfit,
  //   button: 'ⓧ',
  //   click: (product) => {
  //     setUserOutfit(userOutfit.filter(prod => prod.id !== product.id));
  //   }
  // },
//   related: {
//     list: relatedProducts,
//     button: '★',
//     click: (product) => {
//       setUserOutfit([...userOutfit, product]);
//     }
//   },
//   add: {

//   }
// };