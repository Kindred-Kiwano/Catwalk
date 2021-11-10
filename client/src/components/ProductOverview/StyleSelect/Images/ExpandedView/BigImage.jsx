import React from 'react';
import { ImagesOfSelectedStyle, CurrentlySelectedImage } from '../../StyleSelect.jsx';

var BigImage = () => {
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);


  return (
    <div>

    </div>
  );

};

export default BigImage;