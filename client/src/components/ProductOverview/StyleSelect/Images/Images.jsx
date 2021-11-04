import React from 'react';
import SelectedImage from './SelectedImage.jsx';
import Carousel from './Carousel.jsx';

var Images = () => {
  return (
    <div>
      {/* TODO: project requirement: overlay the gallery onto the selected image */}
      <SelectedImage />
      <Carousel />
    </div>
  );
};

export default Images;
