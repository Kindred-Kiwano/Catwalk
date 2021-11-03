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



  // the default state should be out first image in the collection of THE STYLE THE USER SELECTED
  var [style, updateStyle] = React.useContext(Style);
  // LATER CHANGE THIS TO REFLECT THE SELECTED STYLE (deafult first is good)
  var photosArray = style.photos;
  var [imageGallery, updateImageGallery] = React.useState(photosArray);

  // initialize selected image to first in the current gallery
  var [selected, updateSelected] = React.useState(imageGallery[0].url);


  // MAYBE TODO: add a React.useEffect call to update state

  return (
    <div>
      <CurrentlySelectedImage.Provider value={[selected, updateSelected]}>
        <ImagesOfSelectedStyle.Provider value={[imageGallery, updateImageGallery]}>
          <SelectedImage />
          <Gallery />
        </ImagesOfSelectedStyle.Provider>
      </CurrentlySelectedImage.Provider>
    </div>
  );
};

export default Images;
