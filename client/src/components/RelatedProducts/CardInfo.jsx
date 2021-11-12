/* eslint-disable camelcase */
import React from 'react';
import ReactDOM from 'react-dom';
import FakeRating from './FakeRating.jsx';
import productList from '../../../../fakeData/productList.js';


const CardInfo = (props) => {

  // let { id, name, default_price, category } = props.product;
  // let price = default_price;
  console.log(props)
  let { id, name, default_price, category } = props.product
  let price = default_price;

  return (
    <footer className="card-info">
      <p className='category'><em>{ category }</em></p>
      <p className='name'>{ name }</p>
      <p className={''}>{`$${ price.split('.')[0]}` }</p>
      <FakeRating product_id={61590} />
    </footer>
  );
};

export default CardInfo;
