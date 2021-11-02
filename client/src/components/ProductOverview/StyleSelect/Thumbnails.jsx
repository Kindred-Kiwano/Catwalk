import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import { FakeProduct } from '../ProductOverview.jsx';

var Thumbnails = () => {
  var prod = React.useContext(FakeProduct);
  return (
    <div>
      Thumbnails to select style:
      {prod.styles.results.map((style) => {
        return <Thumbnail color={style.name}/>;
      })}
    </div>
  );
};

export default Thumbnails;