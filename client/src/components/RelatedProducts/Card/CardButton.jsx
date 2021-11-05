import React from 'react';
import ReactDOM from 'react-dom';

const CardButton = (props) => {
  let { label, click } = props;

  let text = {
    outfit: 'ⓧ',
    related: '★',
    addToOutfit: ''
  };
  //remove product from props, replace with ID
  return (
    <button className={'card ' + label}
      role={'button'}
      onClick={click} >
      { text[label] }
    </button>
  );
};

export default CardButton;