import React from 'react';
import SelectedImage from './SelectedImage.jsx';
import Gallery from './Gallery.jsx';

var Images = () => {

  // // cache previous style for rerenders
  // var previousStyleReference = React.useRef();
  // React.useEffect(() => {
  //   previousStyleReference.current = style;
  // });

  // var previousStyle = previousStyleReference.current;
  // React.useEffect(() => {
  //   if (previousStyle !== style) {
  //     updateSelected(imageGallery[0]);
  //   }
  // });


  return (
    <div>
      {/* TODO: project requirement: overlay the gallery onto the selected image */}
      <SelectedImage />
      <Gallery />
    </div>
  );
};

export default Images;
