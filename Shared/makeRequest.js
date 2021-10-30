import axios from '../config/config.js';


//GET all products
export const getAllProducts = (params = { count: 5 }) => {
  axios.get('/products')
    .then(list => console.log(list.data))
    .catch(err => {});
};


export const getRelatedProducts = (id) => {
  return axios.get(`/products/${id}/related`); //returns a promise
};

