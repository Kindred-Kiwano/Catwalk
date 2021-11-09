const sharedHelpers = {

  setButtonDisplay: function(selected, imageGallery) {
    var leftButtonDisplay, rightButtonDisplay;

    if (imageGallery.length === 0 || imageGallery.length === 1) {
      leftButtonDisplay = {visibility: 'hidden'};
      rightButtonDisplay = {visibility: 'hidden'};
    } else {
      if (selected.index === 0) {
        leftButtonDisplay = {visibility: 'hidden'};
        rightButtonDisplay = {visibility: 'visible'};
      } else if (selected.index === imageGallery.length - 1) {
        leftButtonDisplay = {visibility: 'visible'};
        rightButtonDisplay = {visibility: 'hidden'};
      } else {
        leftButtonDisplay = {display: 'visible'};
        rightButtonDisplay = {display: 'visible'};
      }
    }

    return [leftButtonDisplay, rightButtonDisplay];
  }

};

export default sharedHelpers;

