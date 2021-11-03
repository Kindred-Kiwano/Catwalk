import React from 'react';
import '../styles.css';
import { Style } from '../ProductOverview.jsx';

var Thumbnail = (props) => {

  var [style, updateStyle] = React.useContext(Style);
  var changeStyle = (event) => {
    // using props.styleObject to get reference to the item clicked (change later if you factor this function into another file)
    if (style.style_id !== props.styleObject.style_id) {
      console.log('style updated!');
      console.log('updating to this style: ', props.styleObject)
      updateStyle(props.styleObject);
    }
  };

  return (
    <span onClick={changeStyle} className="style-thumbnail" style={{backgroundColor: props.color.toLowerCase()}}>
      {/* TODO project requirement: checkmark should appear over the selected icon */}
      &emsp;
    </span>
  );
};

export default Thumbnail;