import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import { FakeProduct } from '../ProductOverview.jsx';
import { Style } from '../ProductOverview.jsx';
import decorate from '../methods/decorate.js';

var Thumbnails = () => {
  // the list of avaialble styles -> thumbnails
  var [product, updateProduct] = React.useContext(FakeProduct);
  // the currently selected style
  var [style, updateStyle] = React.useContext(Style);

  return (
    <div id="thumbnails">
      <p>Style: {style.name}</p>
      <div id="thumbnail-container">
        {/* returns an array of divs (rows) */}
        {decorate.parseThumbnailRows(product.styles.results)}
      </div>
    </div>
  );
};

export default Thumbnails;


// array to hold all groups of 4

// loop thru all styles
  // once we reach 4, push array and clear for the next 4



