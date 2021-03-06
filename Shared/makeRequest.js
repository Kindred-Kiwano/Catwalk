import axios from '../config/config.js';

export const getAllProducts = (params = { count: 5 }) => {
  axios.get('/products')
    .then(list => console.log(list.data))
    .catch(err => { throw err; });
};

export const getRelatedProducts = (id) => {
  return axios.get(`/products/${id}/related`);
};

export const getProductInfoById = (product_id) => {
  return axios.get(`/products/${product_id}`);
};

export const getAllStyles = (product_id) => {
  return axios.get(`/products/${product_id}/styles`);
};

export const getReviewCount = (product_id) => {
  return axios.get(`/reviews/meta?product_id=${product_id}`);
};

export const addToCart = (sku_id) => {
  return axios.post('/cart', {
    'sku_id': sku_id
  });
};

export const postClickTracking = (paramsObject) => {
  axios.post('/interactions', paramsObject);
};

export const getReviews = (productId, count, sortBy) => {
  return axios.get(`/reviews?product_id=${productId}&count=${count}&sort=${sortBy}`);
};

export const getReviewsMeta = (productId) => {
  return axios.get(`/reviews/meta?product_id=${productId}`);
};
