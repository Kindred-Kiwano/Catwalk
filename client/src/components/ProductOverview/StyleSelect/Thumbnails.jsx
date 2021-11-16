import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import { FakeProduct, Style } from '../ProductOverview.jsx';
import decorate from '../methods/decorate.js';

var Thumbnails = () => {
  var [product, updateProduct] = React.useContext(FakeProduct);
  var [style, updateStyle] = React.useContext(Style);

  return (
    <div id="thumbnails">
      <p id="style-description">Style: {style.name}</p>
      <div id="thumbnail-container">
        {decorate.parseThumbnailRows(product.styles.results)}
      </div>
    </div>
  );
};

export default Thumbnails;
