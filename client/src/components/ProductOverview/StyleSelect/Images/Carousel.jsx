import React from 'react';
import Gallery from './Gallery.jsx';
import { CurrentlySelectedImage } from '../StyleSelect.jsx';
// image gallery
import { ImagesOfSelectedStyle } from '../StyleSelect.jsx';
import { VisibleThumbnails } from './Images.jsx';
import sharedHelpers from '../../../../../../Shared/sharedHelpers.js';
import pickImage from '../../methods/pickImage.js';

var Carousel = () => {
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var [visibleThumbnails, updateVisibleThumbnails] = React.useContext(VisibleThumbnails);

  var moveSelection = (event) => {
    var nextTargetIndex = pickImage.getNextTargetIndex(event.target.innerHTML, selected);

    if (nextTargetIndex >= 0 && nextTargetIndex < imageGallery.length) {
      if (imageGallery.length > 7) {
        var firstVisibleIndex = visibleThumbnails[0].index;
        var lastVisibleIndex = visibleThumbnails[6].index;

        if (pickImage.isOffToTheLeft(nextTargetIndex, firstVisibleIndex)) {
          pickImage.shiftVisibles(firstVisibleIndex - 1, imageGallery, updateVisibleThumbnails);
        }

        if (pickImage.isOffToTheRight(nextTargetIndex, lastVisibleIndex)) {
          pickImage.shiftVisibles(firstVisibleIndex + 1, imageGallery, updateVisibleThumbnails);
        }
      }
    }
    var goToPhoto = imageGallery[nextTargetIndex];
    updateSelected(goToPhoto);

  };

  var [leftButtonDisplay, rightButtonDisplay] = sharedHelpers.setButtonDisplay(selected, imageGallery);

  return (
    <div id="carousel-and-buttons">
      <button style={leftButtonDisplay} onClick={moveSelection}>{'<'}</button>
      <Gallery />
      <button style={rightButtonDisplay} onClick={moveSelection}>{'>'}</button>
    </div>
  );
};

export default Carousel;
