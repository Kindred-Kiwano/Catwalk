import React from 'react';
import '../styles.css';
import { CurrentlySelectedImage } from './Images.jsx';

var SelectedImage = () => {
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  console.log('selected image url is: ', selected);
  return (
    <div>
      <img className="selected" src={selected} />
    </div>
  );
};

export default SelectedImage;
