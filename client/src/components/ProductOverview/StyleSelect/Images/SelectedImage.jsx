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


  // apply classnames for styling based on expanded view or not
  var selectedClass, selectedContainer;
  if (expand) {
    selectedClass = 'selected-expand';
    selectedContainer = 'selected-expand-container';
  } else {
    selectedClass = 'selected';
    selectedContainer = 'selected-contianer';
  }

  var toggleExpand = (event) => {

    updateExpand(!expand);
  };

  // toggle expand and make the image area span fullscreen

  return (
    <div className={selectedContainer}>
      <img onClick={toggleExpand} className={selectedClass} src={selected.url} />
    </div>
  );


};

export default SelectedImage;
