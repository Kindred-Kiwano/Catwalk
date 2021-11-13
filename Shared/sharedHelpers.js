const sharedHelpers = {

  setButtonDisplay: function(selected, imageGallery, preference) {
    var leftButtonDisplay, rightButtonDisplay, hide, show;

    switch (preference) {
      case 'visibility':
        hide = {visibility: 'hidden'};
        show = {visibility: 'visible'};
        break;
      case 'display':
        hide = {display: 'none'};
        show = {display: 'inline-block'};
        break;
      default:
        hide = {display: 'none'};
        show = {display: 'inline-block'};
    }

    if (imageGallery.length === 0 || imageGallery.length === 1) {
      leftButtonDisplay = hide;
      rightButtonDisplay = hide;
    } else {
      if (selected.index === 0) {
        leftButtonDisplay = hide;
        rightButtonDisplay = show;
      } else if (selected.index === imageGallery.length - 1) {
        leftButtonDisplay = show;
        rightButtonDisplay = hide;
      } else {
        leftButtonDisplay = show;
        rightButtonDisplay = show;
      }
    }

    return [leftButtonDisplay, rightButtonDisplay];
  }

};

export default sharedHelpers;

