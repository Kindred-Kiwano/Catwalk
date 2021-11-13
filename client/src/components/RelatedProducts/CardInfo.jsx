/* eslint-disable camelcase */
import React from 'react';
import ReactDOM from 'react-dom';
import FakeRating from './FakeRating.jsx';
import { templatePrices } from './utils/methods.js';
// import productList from '../../../../fakeData/productList.js';


const CardInfo = (props) => {
  let { product, update } = props
  let { id, name, default_price, category } = product
  let price = default_price;
  // let Price = templatePrices(product) //not working as expected

  return (
    <footer className="card-info" onClick={() => update(id)}>
      <p className='category' onClick={() => update(id)}><em>{category}</em></p>
      <p className='name'>{name}</p>
      <p className={''}>{`$${ price.split('.')[0]}` }</p>
      {/* <Price /> */}
      <FakeRating product_id={61590} />
    </footer>
  );
};

export default CardInfo;
