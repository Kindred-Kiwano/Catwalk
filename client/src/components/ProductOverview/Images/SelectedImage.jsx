import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';
import '../styles.css';

var SelectedImage = () => {
  var prod = React.useContext(FakeProduct);
  return (
    <div>
      <img className="selected" src={prod.styles.results[0].photos[0].url} />
    </div>
  );
};

export default SelectedImage;