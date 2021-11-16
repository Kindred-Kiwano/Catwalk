import React from 'react';
import '../../styles.css';
import { CurrentlySelectedImage } from '../StyleSelect.jsx';
import { ExpandedView } from '../../ProductOverview.jsx';

var GalleryImage = (props) => {
  var [expand, updateExpand] = React.useContext(ExpandedView);
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var selectNewImage = (event) => {
    if (selected.url !== props.imageObject.url) {
      updateSelected(props.imageObject);
    }
  };

  var selectedStatus = '';
  if (selected.url === props.imageObject.url) {
    selectedStatus = 'selected-gallery-image';
  }

  return expand ? <span className={'placeholder-dot ' + selectedStatus} onClick={selectNewImage}>{' '} </span> :
    <img className={'gallery-image ' + selectedStatus} onClick={selectNewImage} src={props.imageObject.thumbnail_url} />;

};

export default GalleryImage;
