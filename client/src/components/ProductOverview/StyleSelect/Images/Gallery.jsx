import React from 'react';
import GalleryImage from './GalleryImage.jsx';
import { VisibleThumbnails } from './Images.jsx';


var Gallery = () => {
  var [visibleThumbnails, updateVisibleThumbnails] = React.useContext(VisibleThumbnails);

  return (
    <div id="gallery">

      {visibleThumbnails.map((imageObject) => {
        return <GalleryImage imageObject={imageObject} />;
      })}
    </div>
  );

};

export default Gallery;
