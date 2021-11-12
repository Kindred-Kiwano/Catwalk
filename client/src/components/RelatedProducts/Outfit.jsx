import React from 'react';
import axios from '../../../../config/config.js';

import UserContext from './UserContext.jsx';

const Outfit = {};

Outfit.state = [];

Outfit.add = (product) => {
  let {userOutfit, setUserOutfit} = React.useContext(UserContext);
  if (!userOutfit.includes(product)) {
    setUserOutfit([...userOutfit, product]);
  }
};

Outfit.save = () => {
  localStorage.setItem('outfit', JSON.stringify(Outfit.state));
};

Outfit.remove = (id) => {
  let {userOutfit, setUserOutfit} = React.useContext(UserContext);
  if (userOutfit.includes(product)) {
    setUserOutfit(userOutfit.filter(prod => id !== prod.id));
  }
};

Outfit.reset = () => { localStorage.removeItem('outfit'); };

Outfit.retrieve = () => {
  return JSON.parse(localStorage.getItem('outfit')) || [];
};

export default Outfit;