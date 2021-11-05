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


export const getFiveRandomProducts = () => {
  // get 5 products for now
  return axios.get('/products');
};


export const getProductInfoById = (product_id) => {
  return axios.get(`/products/${product_id}`);
};


export const getAllStyles = (product_id) => {
  return axios.get(`/products/${61584}/styles`);
};

// for checking certain edgecases
// none in stock:
  // product_id 61584
// more than 7 thumbnails for style:
  // product_id 61579