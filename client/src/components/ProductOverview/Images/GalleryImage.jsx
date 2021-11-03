import React from 'react';
import '../styles.css';
import { CurrentlySelectedImage } from './Images.jsx';


var GalleryImage = (props) => {
  // move this referece and function to another file to save on memory?
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var selectNewImage = (event) => {
    var url = event.target.src;
    // left off here, need to make a function that searches for the object containing the current url,
      // then grabbing the full-res image to set state with


    // get the larger image associated with that thumbnail
    // use CurrentlySelectedImage's context value to access the function that updates the selected image state
  };

  return (
    <img className="gallery-image" src={props.thumbnailURL} onClick={selectNewImage}/>
  );
};

export default GalleryImage;