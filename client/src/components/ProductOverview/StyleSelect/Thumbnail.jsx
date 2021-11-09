import React from 'react';
import '../styles.css';
import { Style } from '../ProductOverview.jsx';
import { CurrentlySelectedImage } from './StyleSelect.jsx';
import { ImagesOfSelectedStyle } from './StyleSelect.jsx';

var Thumbnail = (props) => {
  var [style, updateStyle] = React.useContext(Style);
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);

  var changeStyle = (event) => {
    // using props.styleObject to get reference to the item clicked (change later if you factor this function into another file)
    if (style.style_id !== props.styleObject.style_id) {
      updateStyle(props.styleObject);
      // now image gallery is of the newly selected style
      var newSelected = props.styleObject.photos[selected.index];
      if (!newSelected) {
        // if overindexed,
        // just give it the last space in the gallery
        newSelected = props.styleObject.photos[imageGallery.length - 1];
      }
      updateSelected(newSelected);
      console.log('updated to: ', props.styleObject.name);
    }
  };

  var selectedStatus = '';
  if (style.style_id === props.styleObject.style_id) {
    // later change this css class to produce a checkmark (or conditially render one here)
    selectedStatus = 'current-style-thumbnail';
  }


  return (
    <span data-testid={props.testKey} onClick={changeStyle} className={'style-thumbnail ' + selectedStatus} >
      {/* TODO project requirement: checkmark should appear over the selected icon */}
      {props.styleObject.name}
    </span>
  );
};

export default Thumbnail;