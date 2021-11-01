import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';
import GalleryImage from './GalleryImage.jsx';

var Gallery = () => {
  var prod = React.useContext(FakeProduct);
  console.log('product styles is: ', prod.styles)
  return (
    <div>
      {prod.styles.results[0].photos.map((imageObj) => {
        return <GalleryImage imageURL={imageObj.thumbnail_url} />;
      })}
    </div>
      // generate thumbnail images
      // still include the selected image, we'll grey it out in the carousel later

  );

};

export default Gallery;
