import React from 'react';
import '../../styles.css';
import { CurrentlySelectedImage } from '../StyleSelect.jsx';
import { ExpandedView } from '../../ProductOverview.jsx';

var SelectedImage = () => {
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var [expand, updateExpand] = React.useContext(ExpandedView);

  /** TODO project requirement: magnifying glass cursor
   *  When the user moves mouse off the galley and onto the main image, cursor should become a magnifying glass
   *  On clicking, the expanded view should toggle
   */

  var toggleExpand = (event) => {
    updateExpand(!expand);
  };

  return (
    <div className='selected-container'>
      <img onClick={toggleExpand} className='selected' src={selected.url} />
    </div>
  );

};

export default SelectedImage;
