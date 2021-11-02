import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';
import GalleryImage from './GalleryImage.jsx';
import { ImagesOfStyle } from './Images.jsx';

var Gallery = () => {
  var images = React.useContext(ImagesOfStyle);
  return (
    <div>
      {images.map((imageObj) => {
        return <GalleryImage thumbnailURL={imageObj.thumbnail_url} />;
      })}
    </div>
  );

};

export default Gallery;
