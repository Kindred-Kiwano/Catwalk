import React from 'react';
import '../../styles.css';
import { CurrentlySelectedImage } from '../StyleSelect.jsx';
import { ExpandedView } from '../../ProductOverview.jsx';
import { moveSelection } from './Carousel.jsx';
import sharedHelpers from '../../../../../../Shared/sharedHelpers.js';
import pickImage from '../../methods/pickImage.js';

// image gallery
import { ImagesOfSelectedStyle } from '../StyleSelect.jsx';
import { VisibleThumbnails } from './Images.jsx';


var SelectedImage = () => {
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var [expand, updateExpand] = React.useContext(ExpandedView);
  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);
  var [visibleThumbnails, updateVisibleThumbnails] = React.useContext(VisibleThumbnails);

  /** TODO project requirement: magnifying glass cursor
   *  When the user moves mouse off the galley and onto the main image, cursor should become a magnifying glass
   *  On clicking, the expanded view should toggle
   */


  var toggleExpand = (event) => {
    updateExpand(!expand);
  };

  var handleArrowClick = (event) => {
    var nextTargetIndex = pickImage.getNextTargetIndex(event.target.innerHTML, selected);
    moveSelection(nextTargetIndex, imageGallery, visibleThumbnails, updateVisibleThumbnails, updateSelected);
  };

  var [leftButtonDisplay, rightButtonDisplay] = sharedHelpers.setButtonDisplay(selected, imageGallery);

  return (
    <div className='selected-container'>
      <div className="main-arrow-container-left">
        <button onClick={handleArrowClick} style={leftButtonDisplay} className="main-arrow">
          {'<'}
        </button>
      </div>
      <img onClick={toggleExpand} className='selected' src={selected.url} />
      <div className="main-arrow-container-right">
        <button onClick={handleArrowClick} style={rightButtonDisplay} className="main-arrow">
          {'>'}
        </button>
      </div>
    </div>
  );

};

export default SelectedImage;
