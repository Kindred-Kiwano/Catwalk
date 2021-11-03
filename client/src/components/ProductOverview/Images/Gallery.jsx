import React from 'react';
import GalleryImage from './GalleryImage.jsx';
import { ImagesOfSelectedStyle } from './Images.jsx';

var Gallery = () => {
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);

  return (
    <div>
      {/* TODO project requirement: When switching between styles, the index of the image currently selected should be maintained when the gallery updates for the new style. Add another context and state at the tree's head to keep track of this */}


      {imageGallery.map((imageObject) => {
        return <GalleryImage imageObject={imageObject} />;
      })}
    </div>
  );

};

export default Gallery;
