import React from 'react';
import '../styles.css';
import { Style } from '../ProductOverview.jsx';
import { CurrentlySelectedImage, ImagesOfSelectedStyle } from './StyleSelect.jsx';

var parseName = (styleName) => {
  var array = styleName.split(' & ');
  if (array.length === 1) {
    return [styleName, ''];
  }
  return array;
};


var Thumbnail = (props) => {
  var [style, updateStyle] = React.useContext(Style);
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);

  var changeStyle = (event) => {
    if (style.style_id !== props.styleObject.style_id) {
      console.log('*** you clicked a new style ***');

      updateStyle(props.styleObject);
      var newSelected = props.styleObject.photos[selected.index];
      if (!newSelected) {
        newSelected = props.styleObject.photos[imageGallery.length - 1];
      }
      updateSelected(newSelected);
      console.log('updated to: ', props.styleObject.name);
    }
  };

  var selectedStatus = '';
  if (style.style_id === props.styleObject.style_id) {
    selectedStatus = 'current-style-thumbnail';
  }

  var [color1, color2] = parseName(props.styleObject.name);

  return (
    <p data-testid={props.testKey} onClick={changeStyle} className={'style-thumbnail ' + selectedStatus} >
      {color1}
      <br/>
      *
      <br/>
      {color2}
    </p>
  );
};

export default Thumbnail;
