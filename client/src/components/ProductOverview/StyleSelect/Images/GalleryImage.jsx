import React from 'react';
import '../../styles.css';
import { CurrentlySelectedImage } from '../StyleSelect.jsx';
import { ExpandedView } from '../../ProductOverview.jsx';

var GalleryImage = (props) => {
  var [expand, updateExpand] = React.useContext(ExpandedView);
  var [selected, updateSelected] = React.useContext(CurrentlySelectedImage);
  var selectNewImage = (event) => {
    // only change the image if it's not the current selected one
    if (selected.url !== props.imageObject.url) {
      console.log('updating selected!');
      updateSelected(props.imageObject);
    }
  };

  // if it's the currenly selected image
  var selectedStatus = '';
  if (selected.url === props.imageObject.url) {
    selectedStatus = 'selected-gallery-image';
  }


  return expand ? <span className={'placeholder-dot ' + selectedStatus} onClick={selectNewImage}>{'•'} </span> :
    <img className={'gallery-image ' + selectedStatus} src={props.imageObject.thumbnail_url} />;

};

export default GalleryImage;
