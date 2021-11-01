import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';

var CategoryAndName = () => {
  var prod = React.useContext(FakeProduct);

  return (
    <div>
      <h4>CATEGORY AND NAME SUBCOMPONENT</h4>
      <p>{ `${prod.info.category} > ${prod.info.name}` }</p>
    </div>
  );

};

export default CategoryAndName;
