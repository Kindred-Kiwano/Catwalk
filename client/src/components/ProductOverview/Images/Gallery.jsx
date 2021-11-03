import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';
import GalleryImage from './GalleryImage.jsx';
import { ImagesOfStyle } from './Images.jsx';

var Gallery = () => {
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfStyle);
  return (
    <div>
      {imageGallery.map((imageObj) => {
        return <GalleryImage thumbnailURL={imageObj.thumbnail_url} />;
      })}
    </div>
  );

};

export default Gallery;
