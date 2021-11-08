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
    <div>
      <p>Style: {style.name}</p>
      <div>
        {decorate.parseThumbnailRows(product.styles.results)}
      </div>
    </div>
  );
};

export default Thumbnails;


// array to hold all groups of 4

// loop thru all styles
  // once we reach 4, push array and clear for the next 4



