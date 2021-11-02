import React from 'react';
import SelectedImage from './SelectedImage.jsx';
import Gallery from './Gallery.jsx';
import { FakeProduct } from '../ProductOverview.jsx';


export var ImagesOfStyle = React.createContext();

var Images = () => {

// create a new context - the image that is selected by the user
  // STATE HERE FEEDS CONTEXT
    // set a state with react's useState hook,
      // give that state's value to the value= attribute in our context



    // the default state should be out first image in the collection of THE STYLE THE USER SELECTED
    var currentProduct = React.useContext(FakeProduct);
    // LATER CHANGE THIS TO REFLECT THE SELECTED STYLE (deafult first is good)
    var photosArrayOfFirstStyle = currentProduct.styles.results[0].photos;
    var [imageGallery, updateImageGallery] = React.useState(photosArrayOfFirstStyle);


  return (
    <div>
      <ImagesOfStyle.Provider value={imageGallery} >
        <SelectedImage />
        <Gallery />
      </ImagesOfStyle.Provider>
    </div>
  );
};

export default Images;
