import React from 'react';
import Images from './Images/Images.jsx';
import Price from './Price.jsx';
import Thumbnails from './Thumbnails.jsx';
import CartOptions from './CartOptions.jsx';
import { Style } from '../ProductOverview.jsx';
import decorate from '../methods/decorate.js';

// new contexts
export var ImagesOfSelectedStyle = React.createContext();
export var CurrentlySelectedImage = React.createContext();
export var VisibleThumbnails = React.createContext();

var StyleSelect = () => {

  // one page load, the default image should be the first in the gallery – ** however, the currently selected image's index should be maintained when switching to another style
  var [style, updateStyle] = React.useContext(Style);


  // photosArray will give each photo object an index number to reference later
  var photosArray = decorate.addIndexRefs(style.photos);
  var [imageGallery, updateImageGallery] = React.useState(photosArray);

  var initialVisiblePhotos = imageGallery.slice(0, 7);
  // initialize to first 7 in gallery
  var [visibleThumbnails, updateVisibleThumbnails] = React.useState(initialVisiblePhotos);


  // update state on new style selection
  // TODO: only update when the style changes
  React.useEffect(() => {
    updateImageGallery(photosArray);
  });

  // initial selected is first image
  var [selected, updateSelected] = React.useState(imageGallery[0]);

  return (
    <div>
      <ImagesOfSelectedStyle.Provider value={[imageGallery, updateImageGallery]}>
        <VisibleThumbnails.Provider value={[visibleThumbnails, updateVisibleThumbnails]} >
          <CurrentlySelectedImage.Provider value={[selected, updateSelected]}>
            <Images />
            <Price />
            <Thumbnails />
            <CartOptions />
          </CurrentlySelectedImage.Provider>
        </VisibleThumbnails.Provider>
      </ImagesOfSelectedStyle.Provider>
    </div>
  );
};

export default StyleSelect;