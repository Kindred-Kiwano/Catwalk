import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';


// should determine how many the shopper can buy of the selected size
var SelectQty = () => {
  var prod = React.useContext(FakeProduct);
  return (
    <div>
      <select>
        {/* should first see how many are available - limit as neccessary and return an array of those integers */}
        {/* then map thru the array generating an <option value="x" >x</option> for each number */}
      </select>
    </div>
  );
};



export default SelectQty;