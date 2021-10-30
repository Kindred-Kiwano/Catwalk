import React from 'react';
import ReactDOM from 'react-dom';
import CardButton from './CardButton.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';
import FakeRating from './FakeRating.jsx';


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

let imgSrc = 'https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';


const Card = (props) => {

  let { id, name, default_price, sale_price, style, category } = props.product;

  var testGet = props.click;

  if (sale_price) {

  }

  if (default_price - sale_price) {

  }

  const dummyClick = (e) => {
    console.log(e.target)
    e.preventDefault()
  };

  return (

    <div className='card' id={id} onClick={() => {}}>
      <span className='card header'>
        <CardImage img={imgSrc} />
        <CardButton value={' ⓧ '} click={e => dummyClick(e)} />
      </span>
      <span className={'card info'}>
        <CardInfo
          category={category}
          name={name}
          price={default_price}
          sale={'false'} />
        <FakeRating product_id={id} type={'OUTFIT'} />
      </span>
    </div>
  );
};

export default Card;