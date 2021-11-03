import React from 'react';
import '../styles.css';
import { Style } from '../ProductOverview.jsx';

var Thumbnail = (props) => {

  var [style, updateStyle] = React.useContext(Style);
  var changeStyle = (event) => {
    // should be activated on click
    // use props.styleObject to get reference to the item clicked (change later if you factor this function into another file)
    // should call the updateStyle method of the styles context, passing in the stylesObject

    // only update if current style is different
    if (style.style_id !== props.styleObject.style_id) {
      console.log('style updated!');
      console.log('updating to this style: ', props.styleObject)
      updateStyle(props.styleObject);
    }

  };

  return (
    <span onClick={changeStyle} className="style-thumbnail" style={{backgroundColor: props.color.toLowerCase()}}>
      &emsp;
    </span>
  );
};

export default Thumbnail;