import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';
import '../styles.css';
import { ImagesOfStyle } from './Images.jsx';

var SelectedImage = () => {
  var images = React.useContext(ImagesOfStyle);
  var prod = React.useContext(FakeProduct);

  return (
    <div>
      <img className="selected" src={images[0].url} />
    </div>
  );
};

export default SelectedImage;