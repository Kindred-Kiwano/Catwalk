var pickImage = {
// takes an image gallery (array) and an index (int) to start from in respect to WHOLE gallery
  shiftVisibles: function(startFrom, imageGallery, callback) {
    var shifted = imageGallery.slice(startFrom, startFrom + 7);
    callback(shifted);
  },

  // takes a next target index (int) and the right-most index visible in respect to WHOLE gallery
  isOffToTheRight: function(nextTargetIndex, lastVisibleIndex) {
    return nextTargetIndex > lastVisibleIndex;
  },

  // same as above but for left-boundary
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