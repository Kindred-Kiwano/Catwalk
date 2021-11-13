var pickImage = {
  shiftVisibles: function(startFrom, imageGallery, callback) {
    var shifted = imageGallery.slice(startFrom, startFrom + 7);
    callback(shifted);
  },

  isOffToTheRight: function(nextTargetIndex, lastVisibleIndex) {
    return nextTargetIndex > lastVisibleIndex;
  },

  isOffToTheLeft: function(nextTargetIndex, firstVisibleIndex) {
    return nextTargetIndex < firstVisibleIndex;
  },

  getNextTargetIndex: function(buttonText, currentlySelected) {
    if (buttonText === '&lt;') {
      return currentlySelected.index - 1;
    } else {
      return currentlySelected.index + 1;
    }
  }


};

export default pickImage;