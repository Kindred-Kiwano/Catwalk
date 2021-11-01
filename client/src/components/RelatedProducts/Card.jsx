import React from 'react';
import ReactDOM from 'react-dom';
import CardButton from './CardButton.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';


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
      remove: (obj, list) => {
        splice global state outfit array
      }
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
  let { product } = props;

  let { id, name, default_price, sale_price, style, category } = product;

  var testGet = props.click;

  const outfit = 'ⓧ';
  const related = '★';

  if (sale_price) {
    //get price data from api
    //format price
  }

  if (default_price - sale_price) {

  }

  const dummyClick = (e) => {
    console.log(e.target.id);
    e.preventDefault();
  };

  return (
    <div className='card' id={id} onClick={e => dummyClick(e)}>
      <header className='card'>
        <CardButton value={outfit} click={()=>{}} />
        <CardImage img={imgSrc} />
      </header>
      <CardInfo product={product} />
    </div>
  );
};

export default Card;