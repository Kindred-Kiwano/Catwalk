/* eslint-disable camelcase */
import React from 'react';
import FakeRating from './FakeRating.jsx';
import {templatePrices} from './utils/methods.js'


const CardInfo = (props) => {
  console.log(props, 'card info')

  let { product, update } = props
  let { id, name, default_price, category } = product
  let price = default_price;
  let [ratings, setRatings] = React.useState(null);

  return (
    <footer className="card-info" onClick={() => update(id)}>
      <p className='category' onClick={() => update(id)}><em>{category}</em></p>
      <p className='name'>{name}</p>
      {templatePrices(product)}
      <FakeRating product_id={61590} />
    </footer>
  );
};

export default CardInfo;
