import React from 'react';
import axios from '../../../../config/config.js';

import {related} from './Outfit.jsx';
// import {outfit, related} from './Outfit.jsx';

var context = {};
var outfit = {};

// var updateRelatedProducts = (id) => {
//   var products;
//   axios.get(`/products/${id}/related`)
//     .then(ids => related.populateAsync(ids.data, related.getData))
//     .then(success => products = success)
//     .catch(err => console.log(err));
//   return products;
// };

context.currentProduct = 61590;


outfit.list = [];
outfit.button = 'ⓧ';
outfit.click = () => console.log('fix click method')

related.button = '★';
related.list = [];
related.click = () => console.log('fix click method')

context.outfit = outfit;
context.related = related;

const UserContext = React.createContext(null);



export default UserContext;
