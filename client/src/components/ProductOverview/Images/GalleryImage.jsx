import React from 'react';
import '../styles.css';

var GalleryImage = (props) => {
  return (
    <img className="gallery-image" src={props.thumbnailURL} />
  );
};

export default GalleryImage;