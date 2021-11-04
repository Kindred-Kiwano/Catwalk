import React from 'react';
import GalleryImage from './GalleryImage.jsx';
import { ImagesOfSelectedStyle } from '../StyleSelect.jsx';

var Gallery = () => {
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);

  return (
    <div>

      {/* TODO project requirement: When switching between styles, the index of the image currently selected should be maintained when the gallery updates for the new style. Add another context and state at the tree's head to keep track of this */}

      {/** TODO project requirement: refactor to carousel
       * 7 images max visible at a time
       * arrow buttons to scroll through images (needs to select images)
       * carousel should scoll automatically when selected image is more than 7 from start (or scroll back to
           first 7 if the user goes back there)
       * [done] The left button should dissapear when the first image is selected, and right button should dissapear when last image is selected
      */}

      {imageGallery.map((imageObject) => {
        return <GalleryImage imageObject={imageObject} />;
      })}
    </div>
  );

};

export default Gallery;
