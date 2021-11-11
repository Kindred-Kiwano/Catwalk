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

var StyleSelect = () => {

  // on page load, the default image should be the first in the gallery – ** however, the currently selected image's index should be maintained when switching to another style
  var [style, updateStyle] = React.useContext(Style);

  // photosArray will give each photo object an index number to reference later
  var photosArray = decorate.addIndexRefs(style.photos);
  var [imageGallery, updateImageGallery] = React.useState(photosArray);

  // update state on new style selection
  // TODO: only update when the style changes
  React.useEffect(() => {
    console.log('called useEffect to update the whole gallery');
    updateImageGallery(photosArray);
  }, [JSON.stringify(photosArray)]);

  // initial selected is first image
  var [selected, updateSelected] = React.useState(imageGallery[0]);

  return (
    <div id="images-and-styles">
      <ImagesOfSelectedStyle.Provider value={[imageGallery, updateImageGallery]}>
        <CurrentlySelectedImage.Provider value={[selected, updateSelected]}>
          {/* has id="all-images" */}
          <Images />
          <div id="style-select">
            <Price />
            <Thumbnails />
            <CartOptions />
            <p id="reminder-to-select-size"></p> {/* insert text here if user tries adding to cart before selecting */}
          </div>
        </CurrentlySelectedImage.Provider>
      </ImagesOfSelectedStyle.Provider>
    </div>
  );

};

export default StyleSelect;