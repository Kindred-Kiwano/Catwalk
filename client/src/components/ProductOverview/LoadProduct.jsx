import React from 'react';
import ProductOverview from './ProductOverview.jsx';
import { getProductInfoById, getAllStyles, getReviews, getReviewCount } from '../../../../Shared/makeRequest.js';
import RatingsAndReviews from '../../components/Reviews/main.jsx';
import RelatedProductsAndOutfit from '../RelatedProducts/RelatedProductsAndOutfit.jsx';

var LoadProduct = () => {
  var [productState, setProductState] = React.useState(null);
  var Product = {};

  var changeProduct = (productId) => {
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
      });
  };

  if (productState === null) {
    changeProduct(61579);

    // 61588
    return (
      <></>
    );

  } else {
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

