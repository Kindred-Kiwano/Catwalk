const sharedHelpers = {

  setButtonDisplay: function(selected, imageGallery) {
    var leftButtonDisplay, rightButtonDisplay;
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

    return [leftButtonDisplay, rightButtonDisplay];
  }

};

export default sharedHelpers;

