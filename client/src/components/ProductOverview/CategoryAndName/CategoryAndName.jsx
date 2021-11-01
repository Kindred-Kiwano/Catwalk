import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';

var CategoryAndName = () => {
  var prod = React.useContext(FakeProduct);

  return (
    <div>
      <h4>CATEGORY AND NAME SUBCOMPONENT</h4>
      <a href="https://shop.lululemon.com/c/mens-polos/_/N-8kx" >{prod.info.name}</a>
      <span> {'>'} super fashionable</span>
    </div>
  );

};

export default CategoryAndName;
