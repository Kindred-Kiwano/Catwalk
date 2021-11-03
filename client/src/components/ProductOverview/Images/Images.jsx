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
  console.log('from <Images />, the style is: ', style);

  var photosArray = style.photos;
  var [imageGallery, updateImageGallery] = React.useState(photosArray);

  // initialize selected image to first in the current gallery
  var [selected, updateSelected] = React.useState(imageGallery[0]);


  // MAYBE TODO: add a React.useEffect call to update state

  return (
    <div>
      <CurrentlySelectedImage.Provider value={[selected, updateSelected]}>
        <ImagesOfSelectedStyle.Provider value={[imageGallery, updateImageGallery]}>
          {/* TODO: project requirement: overlay the gallery onto the selected image */}
          <SelectedImage />
          <Gallery />
        </ImagesOfSelectedStyle.Provider>
      </CurrentlySelectedImage.Provider>
    </div>
  );
};

export default Images;
