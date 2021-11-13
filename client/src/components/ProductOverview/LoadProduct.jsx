import React from 'react';
import ProductOverview from './ProductOverview.jsx';
import { getProductInfoById, getAllStyles, getReviews, getReviewCount } from '../../../../Shared/makeRequest.js';
import RatingsAndReviews from '../../components/Reviews/main.jsx';
import RelatedProductsAndOutfit from '../RelatedProducts/RelatedProductsAndOutfit.jsx';

var LoadProduct = () => {
// Sam and David may want to use setProductState
  var [productState, setProductState] = React.useState(null);
  var Product = {};

  var changeProduct = (productId) => {
    // makes network requests to build an object
    //  on success, LoadProduct re-renders to send that object to our components

    getProductInfoById(productId)
      .then((productInfo) => {
        Product.info = productInfo.data;
        return getReviews(productInfo.data.id, 1000, 'newest');
      })
      .then((productReviews) => {
        Product.reviews = productReviews.data;
        return getReviewCount(Product.info.id);
      })
      .then((reviewsMeta) => {
        Product.reviewsMeta = reviewsMeta.data;
        return getAllStyles(Product.info.id);
      })
      .then((productStyles) => {
        Product.styles = productStyles.data;
        setProductState(Product);
      })
      .catch((err) => {
        console.log('error getting product(s) and/or details');
        throw err;
      });
  };

  // on loading the page for the first time, we just select an arbitrary first product
  if (productState === null) {
    // arbitrarily choosing the 'camo onsie' when the page loads
    changeProduct(61579);


    // 61588
    return (
      <p>
        Loading product details...
      </p>
    );

  } else {
    // after network request complete, re-render to pass the data to our components
    console.log('product', productState);
    return (
      <>
        <ProductOverview productState={productState} />
        <RelatedProductsAndOutfit productId={productState.info.id} updateGlobalId={changeProduct}/>
        <RatingsAndReviews productId={productState.info.id}/>
      </>
    );
  }
};

export default LoadProduct;

