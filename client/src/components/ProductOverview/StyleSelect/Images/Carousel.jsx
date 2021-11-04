import React from 'react';
import Gallery from './Gallery.jsx';
import { CurrentlySelectedImage } from '../StyleSelect.jsx';
// image gallery
import { ImagesOfSelectedStyle } from '../StyleSelect.jsx';

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

  return (
    <div>
      <button onClick={moveSelection}>{'<'}</button>
      <Gallery />
      <button onClick={moveSelection}>{'>'}</button>
    </div>
  );
};

export default Carousel;


