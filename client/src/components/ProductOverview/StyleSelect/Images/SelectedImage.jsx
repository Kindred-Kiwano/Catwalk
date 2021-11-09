import React from 'react';
import '../../styles.css';
import { CurrentlySelectedImage } from '../StyleSelect.jsx';
import { ExpandedView } from './Images.jsx';

var SelectedImage = () => {
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var [expand, updateExpand] = React.useContext(ExpandedView);
  /** TODO project requirement: magnifying glass cursor
   *  When the user moves mouse off the galley and onto the main image, cursor should become a magnifying glass
   *  On clicking, the expanded view should toggle
   */

  /** TODO project requirement: expanded view
   * -- fill in later --
   */

  var selectedClass;
  if (expand) {
    selectedClass = 'selected-expand';
  } else {
    selectedClass = 'selected';
  }

  var toggleExpand = (event) => {
    updateExpand(!expand);
  };


  return (
    <div>
      <button onClick={toggleExpand}>
        Expand oWo
      </button>
      <img className={selectedClass} src={selected.url} />
    </div>
  );


};

export default SelectedImage;
