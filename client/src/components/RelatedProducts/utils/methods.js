import React from 'react';


export const retrieveLocalOutfit = () => {
  return JSON.parse(localStorage.getItem('outfit')) || [];
};

export const saveLocalOutfit = (id) => {
  let outfit = retrieveLocalOutfit();
  localStorage.setItem('outfit', JSON.stringify([id, ...outfit]));
};

export const templatePrices = ({ price, sale }) => {


  // console.log(props, 'price template')
  price = { price, className: 'price' };

  let Prices = React.createElement('span', price, sale);

  if (sale) {
    let Sale = React.createElement('span', { sale, className: 'price sale' });

    Prices = React.createElement(
      'span',
      { price, className: 'price original' },
      <Sale />
    );
  }

  return Prices;
};

