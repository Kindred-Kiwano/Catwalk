import React from 'react';
import '../styles.css';
import { CurrentlySelectedImage } from './Images.jsx';

var GalleryImage = (props) => {
  // move this referece and function to another file to save on memory?
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var selectNewImage = (event) => {
    // send the other URL we have here in props to be rendered as the full image
    updateSelected(props.fullImageURL);
    // use CurrentlySelectedImage's context value to access the function that updates the selected image state
  };

  return (
    <img className="gallery-image" src={props.thumbnailURL} onClick={selectNewImage}/>
  );
};

export default GalleryImage;
