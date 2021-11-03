import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import { FakeProduct } from '../ProductOverview.jsx';
import { Style } from '../ProductOverview.jsx';

var Thumbnails = () => {
  // the list of avaialble styles -> thumbnails
  var [product, updateProduct] = React.useContext(FakeProduct);
  // the currently selected style
  var [style, updateStyle] = React.useContext(Style);

  return (
    <div>
      <p>Style: {style.name}</p>
      Thumbnails to select style:
      {/* TODO project requirement: thumbails must appear in rows of 4 */}
      {product.styles.results.map((styleObject) => {
        return <Thumbnail color={styleObject.name} styleObject={styleObject} />;
      })}
    </div>
  );
};

export default Thumbnails;