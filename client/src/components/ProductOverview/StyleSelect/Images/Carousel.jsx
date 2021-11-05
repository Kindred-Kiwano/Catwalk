import React from 'react';
import Gallery from './Gallery.jsx';
import { CurrentlySelectedImage } from '../StyleSelect.jsx';
// image gallery
import { ImagesOfSelectedStyle } from '../StyleSelect.jsx';
import sharedHelpers from '../../../../../../Shared/sharedHelpers.js';

var Carousel = () => {
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);

  var moveSelection = (event) => {
    var nextTargetIndex;
    if (event.target.innerHTML === '&lt;') {
      nextTargetIndex = selected.index - 1;
    } else {
      nextTargetIndex = selected.index + 1;
    }

    if (nextTargetIndex >= 0 && nextTargetIndex < imageGallery.length) {
      var goToPhoto = imageGallery[nextTargetIndex];
      updateSelected(goToPhoto);
    }
  };

  var [leftButtonDisplay, rightButtonDisplay] = sharedHelpers.setButtonDisplay(selected, imageGallery);

  return (
    <div>
      <button style={leftButtonDisplay} onClick={moveSelection}>{'<'}</button>
      <Gallery />
      <button style={rightButtonDisplay} onClick={moveSelection}>{'>'}</button>
    </div>
  );
};

export default Carousel;


