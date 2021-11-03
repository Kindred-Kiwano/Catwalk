import React from 'react';
import '../styles.css';
import { CurrentlySelectedImage } from './Images.jsx';

var GalleryImage = (props) => {

  // move this referece and function to another file to save on memory?
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var selectNewImage = (event) => {
    // only change the image if it's not the current selected one
    if (selected.url !== props.imageObject.url) {
      console.log('updating selected!');
      updateSelected(props.imageObject);
    }
  };

  return (
    // TODO project requirement: highlight the selected thumbnail
    <img onClick={selectNewImage} className="gallery-image" src={props.imageObject.thumbnail_url} />
  );
};

export default GalleryImage;
