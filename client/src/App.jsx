import React from 'react';
import LoadProduct from './components/ProductOverview/LoadProduct.jsx';
import Carousels from './components/RelatedProducts/RelatedProductsAndOutfit.jsx';
import RatingsAndReviews from './components/Reviews/main.jsx';

var App = () => {
  return (
    <React.Fragment>
      <LoadProduct />
      <Carousels />
      <RatingsAndReviews />
    </React.Fragment>
  );

};

export default App;
