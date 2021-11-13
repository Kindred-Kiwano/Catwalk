import React from 'react';


export const retrieveLocalOutfit = () => {
  return JSON.parse(localStorage.getItem('outfit')) || [];
};

export const saveLocalOutfit = (id) => {
  let outfit = retrieveLocalOutfit();
  localStorage.setItem('outfit', JSON.stringify([id, ...outfit]));
};

export const templatePrices = ({ price, sale }) => {

  price = `$${price.split('.')[0]}`;

  return (
    <span className='card prices'>
      { sale ?
        <>
          <span className='card prices sale'>{`$${sale} `}</span>{`  |  `}
          <span className='card prices original-price'>{price}</span>
        </>
        :
        <span className='card prices price'> {price}</span>
      }
    </span>
  )
};

