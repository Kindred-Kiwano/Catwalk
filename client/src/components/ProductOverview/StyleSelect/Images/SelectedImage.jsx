import React from 'react';
import '../../styles.css';
import { CurrentlySelectedImage } from '../StyleSelect.jsx';

var SelectedImage = () => {
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  console.log('currently selected image: ', selected.url);

  /** TODO project requirement: magnifying glass cursor
   *  When the user moves mouse off the galley and onto the main image, cursor should become a magnifying glass
   *  On clicking, the expanded view should toggle
   */

  /** TODO project requirement: expanded view
   * -- fill in later --
   */

  return (
    <div>
      <img className="selected" src={selected.url} />
    </div>
  );
};

export default SelectedImage;
