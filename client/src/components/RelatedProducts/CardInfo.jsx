import React from 'react';
import ReactDOM from 'react-dom';
import FakeRating from './FakeRating.jsx';


const CardInfo = (props) => {

  let { id, name, default_price, category, sale_price } = props.product;

  return (
    <footer>
      <p className='category'><em>{ category.toUpperCase() }</em></p>
      <p className='name'>{ name }</p>
      <p className='price'>{`$${ default_price.split('.')[0]}` }</p>
      <FakeRating product_id={id} />
    </footer>
  );
};

export default CardInfo;