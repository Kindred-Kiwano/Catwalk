import React from 'react';
import SelectedImage from './SelectedImage.jsx';
import Carousel from './Carousel.jsx';
import { ImagesOfSelectedStyle } from '../StyleSelect.jsx';


export var VisibleThumbnails = React.createContext();

var Images = () => {

  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);
  var visiblePhotos = imageGallery.slice(0, 7);
  var [visibleThumbnails, updateVisibleThumbnails] = React.useState(visiblePhotos);

  React.useEffect(() => {
    updateVisibleThumbnails(visiblePhotos);
  }, [JSON.stringify(visiblePhotos)]);

  return (
    <div id="images">
      <VisibleThumbnails.Provider value={[visibleThumbnails, updateVisibleThumbnails]} >
        <SelectedImage />
        <Carousel />
      </VisibleThumbnails.Provider>
    </div>
  );
};

export default Images;
