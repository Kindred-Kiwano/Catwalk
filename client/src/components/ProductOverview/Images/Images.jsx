import React from 'react';
import SelectedImage from './SelectedImage.jsx';
import Gallery from './Gallery.jsx';
import { Style } from '../ProductOverview.jsx';

// new contexts
export var ImagesOfSelectedStyle = React.createContext();
export var CurrentlySelectedImage = React.createContext();

var Images = () => {

  // create a new context - the image that is selected by the user
  // STATE FEEDS CONTEXT
    // set a state with react's useState hook,
      // give that state's value to the value= attribute in our context



  // one page load, the default image should be the first in the gallery – ** however, the currently selected image's index should be maintained when switching to another style
  var [style, updateStyle] = React.useContext(Style);
  // console.log('Style picked up in images: ', style.name);
  // console.log('The images associated with that style: ', style.photos);


  var photosArray = style.photos;
  var [imageGallery, updateImageGallery] = React.useState(photosArray);
  React.useEffect(() => {
    updateImageGallery(photosArray);
  });

  // LEFT OFF HERE,
  // -- fixed re-rendering bug for gallery with useEffect,
    // Next need to set state of currently selected to first in the photoGallery


  // initialize selected image to first in the current gallery -- may need to change this to a condition for first render only, and on updates it's whatever we selected
  var [selected, updateSelected] = React.useState(imageGallery[0]);

  console.log('our image gallery: ', imageGallery);
  return (
    <div>
      <ImagesOfSelectedStyle.Provider value={[imageGallery, updateImageGallery]}>
        <CurrentlySelectedImage.Provider value={[selected, updateSelected]}>
          {/* TODO: project requirement: overlay the gallery onto the selected image */}
          <SelectedImage />
          <Gallery />
        </CurrentlySelectedImage.Provider>
      </ImagesOfSelectedStyle.Provider>
    </div>
  );
};

export default Images;
