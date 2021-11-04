import React from 'react';
import Gallery from './Gallery.jsx';

var Carousel = () => {
  return (
    <div>
      <button onClick={selectLeft}>{'<'} prev</button>
      <Gallery />
      <button onClick={selectRight}>next {'>'}</button>
    </div>
  );
};

export default Carousel;

var selectLeft = ( ) => {
  // should update selected's state to be the next image in the gallery
};

var selectRight = ( ) => {
  // should update selected's state to be the previous image in the gallery
};