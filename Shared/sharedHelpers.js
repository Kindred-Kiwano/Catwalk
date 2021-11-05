const sharedHelpers = {

  setButtonDisplay: function(selected, imageGallery) {
    var leftButtonDisplay, rightButtonDisplay;

    if (imageGallery.length === 0 || imageGallery.length === 1) {
      leftButtonDisplay = {display: 'none'};
      rightButtonDisplay = {display: 'none'};
    } else {
      if (selected.index === 0) {
        leftButtonDisplay = {display: 'none'};
        rightButtonDisplay = {display: 'inline'};
      } else if (selected.index === imageGallery.length - 1) {
        leftButtonDisplay = {display: 'inline'};
        rightButtonDisplay = {display: 'none'};
      } else {
        leftButtonDisplay = {display: 'inline'};
        rightButtonDisplay = {display: 'inline'};
      }
    }

    return [leftButtonDisplay, rightButtonDisplay];
  }

};

export default sharedHelpers;

