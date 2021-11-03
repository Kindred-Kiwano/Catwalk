import React from 'react';
import GalleryImage from './GalleryImage.jsx';
import { ImagesOfSelectedStyle } from './Images.jsx';

var Gallery = () => {
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);

  return (
    <div>
      {imageGallery.map((imageObj) => {
        return <GalleryImage thumbnailURL={imageObj.thumbnail_url} fullImageURL={imageObj.url} />;
      })}
    </div>
  );

};

export default Gallery;
