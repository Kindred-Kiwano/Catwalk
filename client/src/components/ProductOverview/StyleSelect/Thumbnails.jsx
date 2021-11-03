import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import { FakeProduct } from '../ProductOverview.jsx';

var Thumbnails = () => {
  var [product, updateProduct] = React.useContext(FakeProduct);
  return (
    <div>
      Thumbnails to select style:
      {product.styles.results.map((style) => {
        return <Thumbnail color={style.name} styleObject={style} />;
      })}
    </div>
  );
};

export default Thumbnails;