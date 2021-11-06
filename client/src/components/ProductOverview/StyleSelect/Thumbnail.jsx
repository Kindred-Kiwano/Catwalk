import React from 'react';
import '../styles.css';
import { Style } from '../ProductOverview.jsx';
import { CurrentlySelectedImage } from './StyleSelect.jsx';

var Thumbnail = (props) => {
  var [style, updateStyle] = React.useContext(Style);
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);

  var changeStyle = (event) => {
    // using props.styleObject to get reference to the item clicked (change later if you factor this function into another file)
    if (style.style_id !== props.styleObject.style_id) {
      updateStyle(props.styleObject);
      updateSelected(props.styleObject.photos[0]);
      console.log('updated to: ', props.styleObject.name);
    }
  };

  return (
    <span onClick={changeStyle} className="style-thumbnail" >
      {/* TODO project requirement: checkmark should appear over the selected icon */}
      {props.styleObject.name}
    </span>
  );
};

export default Thumbnail;