import React from 'react';
import Gallery from './Gallery.jsx';
import { CurrentlySelectedImage } from '../StyleSelect.jsx';
// image gallery
import { ImagesOfSelectedStyle } from '../StyleSelect.jsx';

var Carousel = () => {
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);

  var selectLeft = ( ) => {
    var nextTargetIndex = selected.index - 1;
    if (nextTargetIndex >= 0) {
      var gotToPhoto = imageGallery[nextTargetIndex];
      updateSelected(gotToPhoto);
    }
  };

  var selectRight = ( ) => {
    var nextTargetIndex = selected.index + 1;
    if (nextTargetIndex < imageGallery.length) {
      var gotToPhoto = imageGallery[nextTargetIndex];
      updateSelected(gotToPhoto);
    }
  };



  console.log('selected image: ', selected);
  console.log('image gallery: ', imageGallery);

  return (
    <div>
      <button onClick={selectLeft}>{'<'} prev</button>
      <Gallery />
      <button onClick={selectRight}>next {'>'}</button>
    </div>
  );
};

export default Carousel;


