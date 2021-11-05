import React from 'react';
import Gallery from './Gallery.jsx';
import { CurrentlySelectedImage } from '../StyleSelect.jsx';
// image gallery
import { ImagesOfSelectedStyle } from '../StyleSelect.jsx';
import { VisibleThumbnails } from '../StyleSelect.jsx';
import sharedHelpers from '../../../../../../Shared/sharedHelpers.js';
import pickImage from '../../methods/pickImage.js';

var Carousel = () => {
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var [visibleThumbnails, updateVisibleThumbnails] = React.useContext(VisibleThumbnails);

  var moveSelection = (event) => {
    var nextTargetIndex;
    if (event.target.innerHTML === '&lt;') {
      nextTargetIndex = selected.index - 1;
    } else {
      nextTargetIndex = selected.index + 1;
    }

    // get teh visibly thumbnails
    // if the next target index is out of range of the visible indicies,
    // rerender the carousel to be the next

    if (nextTargetIndex >= 0 && nextTargetIndex < imageGallery.length) {
      console.log('visible thumbnails', visibleThumbnails);
      if (imageGallery.length > 7) {
        var firstVisibleIndex = visibleThumbnails[0].index;
        var lastVisibleIndex = visibleThumbnails[6].index;
        var shiftedGallery;
        if (nextTargetIndex > lastVisibleIndex) {
          shiftedGallery = pickImage.shiftVisibles(firstVisibleIndex + 1, imageGallery);
          updateVisibleThumbnails(shiftedGallery);
        } else if (nextTargetIndex < firstVisibleIndex) {
          shiftedGallery = pickImage.shiftVisibles(firstVisibleIndex - 1, imageGallery);
          updateVisibleThumbnails(shiftedGallery);
        }
      }


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
