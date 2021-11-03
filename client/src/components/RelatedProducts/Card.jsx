import React from 'react';
import ReactDOM from 'react-dom';
import CardButton from './CardButton.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';
import UserContext from './UserContext.jsx';
import Outfit from './Outfit.jsx';


/*

types/styles: {

  outfit: {
    state: {
      selected: bool,
      onSale: bool
    },
    button: {
      del (if selected)
    },
    methods: {
    }
  },
  related: {
    state: selected (removes from related list and adds to outfit)
    button: {
      star (if !selected)
    },
    methods: {
      add: (obj, list) => {
        push to global state Outfit array
        then remove(obj, list) -> from related products global state array
      }
    }
  }
}

*/

let imgSrc = 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';


const Card = (props) => {
  let { product, type } = props;

  let { id, name, default_price, style, category, description } = product;

  let {button, click, list, update} = type;
  console.log(type);

  // const {userOutfit, setUserOutfit} = React.useContext(UserContext);

  // const updateOutfit = (id) => {
  //   setUserOutfit([...userOutfit, id]);
  // };


  const handleClick = (id) => {
    update(id);
  };

  return (
    <div className='card' id={id} onClick={() => update(product)}>
      <header className='card'>
        <CardButton value={button} id={id} onClick={() => update(product)} />
        <CardImage img={imgSrc} onClick={() => console.log(product)}/>
      </header>
      <CardInfo product={product} />
    </div>
  );
};

export default Card;