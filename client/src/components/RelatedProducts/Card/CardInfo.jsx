import React from 'react';
import ReactDOM from 'react-dom';
import FakeRating from './FakeRating.jsx';


const CardInfo = (props) => {

  let { id, name, default_price, category } = props.product;
  let price = default_price;

  return (
    <footer>
      <p className='category'><em>{ category.toUpperCase() }</em></p>
      <p className='name'>{ name }</p>
      <p className={''}>{`$${ price.split('.')[0]}` }</p>
      <FakeRating product_id={id} />
    </footer>
  );
};

export default CardInfo;
