import React from 'react';
import FakeRating from './FakeRating.jsx';

const CardInfo = (props) => {
  let { product } = props
  if (product) {
    let { id, name, default_price, original_price, price, category, sale_price, sale } = product

    console.log(props)
    let placeholder = 'update this'
    if (sale_price) {
      placeholder = 'oh its a sale'
    }

    return (
      <>
        <p className='category'><em>{category.toUpperCase() || ''}</em></p>
        <p className='name'>{name || ''}</p>
        <p className={placeholder}>{`$${price.split('.')[0]}` || '$FREE.99'}</p>
        <FakeRating product_id={id || 0} />
      </>
    );
  }
};

export default CardInfo;
