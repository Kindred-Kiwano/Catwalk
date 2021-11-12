import React from 'react';
import LoadProduct from './ProductOverview/LoadProduct.jsx';
import Carousels from './Carousels.jsx';
import RatingsAndReviews from './Reviews/main.jsx';

var App = () => {
  //todo: keep a single flow of data for all components
  return (
    <React.Fragment>
      <LoadProduct />
      <Carousels />
      <RatingsAndReviews />
    </React.Fragment>
  );

};

export default App;
