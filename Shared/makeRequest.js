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
  axios.post('/interactions', paramsObject)
    .then((response) => {
      console.log('posted! ', response)
    })
    .catch((err) => {
      console.log('error posting user interactions');
      throw err;
    });
};


export const getReviews = (productId, count, sortBy) => {

  return axios.get(`/reviews?product_id=${productId}&count=${count}&sort=${sortBy}`);
};

export const getReviewsMeta = (productId) => {
  return axios.get(`/reviews/meta?product_id=${productId}`);
};

// for checking certain edgecases
// none in stock:
  // product_id 61584
// more than 7 thumbnails for style:
  // product_id 61579
