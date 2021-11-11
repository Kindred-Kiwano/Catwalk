import React from 'react';
import Thumbnail from '../StyleSelect/Thumbnail.jsx';

var decorate = {
  // adds index numbers to photo objects for future reference
  addIndexRefs: function(photoArray) {
    for (var i = 0; i < photoArray.length; i++) {
      photoArray[i].index = i;
    }
    return photoArray;
  },

  // returns rows of 4 thumbnails
  parseThumbnailRows: (styles) => {
    // using products.styles.results as styles
    var allRows = [];
    var row = [];
    debugger;
    for (var i = 0; i < styles.length; i++) {
      if (i % 4 === 0 && i !== 0) {
        allRows.push(<div className="row" >{row}</div>);
        row = [];
      }

      row.push(<Thumbnail testKey={`style-${i}`} styleObject={styles[i]} />);
      if (i === styles.length - 1) {
        // push any remaing row being built
        allRows.push(<div className="row" >{row}</div>);
      }
    }

    return allRows;
  }

};

export default decorate;