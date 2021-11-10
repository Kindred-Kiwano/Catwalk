import React from 'react';
import { ImagesOfSelectedStyle, CurrentlySelectedImage } from '../StyleSelect.jsx';

var Expanded = () => {
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);

  return (
    <div>
      Henlo
    </div>
  )

};

export default Expanded;