import React from 'react';
import Thumbnail from '../StyleSelect/Thumbnail.jsx';

var decorate = {
  addIndexRefs: function(photoArray) {
    for (var i = 0; i < photoArray.length; i++) {
      photoArray[i].index = i;
    }
    return photoArray;
  },

  parseThumbnailRows: (styles) => {
    var allRows = [];
    var row = [];
    for (var i = 0; i < styles.length; i++) {
      if (i % 4 === 0 && i !== 0) {
        allRows.push(<div className="row" >{row}</div>);
        row = [];
      }

      row.push(<Thumbnail testKey={`style-${i}`} styleObject={styles[i]} />);
      if (i === styles.length - 1) {
        allRows.push(<div className="row" >{row}</div>);
      }
    }

    return allRows;
  }

};

export default decorate;