import React from 'react';
import axios from '../../../../config/config.js';

import UserContext from './UserContext.jsx';

const outfit = {};


outfit.add = (product) => {
  let {userOutfit, setUserOutfit} = React.useContext(UserContext);
  setUserOutfit([...userOutfit, product]);
  localStorage.setItem('outfit', JSON.stringify(userOutfit.map(x => x.id)));
};

outfit.save = () => {
  localStorage.setItem('outfit', JSON.stringify(Outfit.state));
};

outfit.remove = (product) => {
  let {userOutfit, setUserOutfit} = React.useContext(UserContext);
  setUserOutfit(userOutfit.filter(prod => product.id !== prod.id));
};


outfit.retrieve = () => {
  return JSON.parse(localStorage.getItem('outfit')) || [];
};

outfit.list = [];
// outfit.list = outfit.retrieve();
outfit.button = 'ⓧ';
outfit.click = outfit.add;





var related = {};


related.getRelatedIds = (id) => {
  return axios.get(`/products/${id}/related`)
    .catch(e => console.log(e));
};

related.getData = (id) => {
  return axios.get(`/products/${id}`)
    .then(product => product.data)
    .catch(e => console.log(e));
};

related.getFeatures = (id) => {
  return axios.get(`/products/${id}`)
    .then(product => product.data)
    .catch(e => console.log(e));
};

related.getStyles = (id) => {
  return axios.get(`/products/${id}/styles`)
    .catch(e => console.log(e));
};

related.populateAsync = (arr, cb) => {
  return Promise.all(arr.map(a => cb(a)))
    .catch(e => console.log(e));
};


export {outfit, related};