
var decorate = {
  // adds index numbers to photo objects for future reference
  addIndexRefs: function(photoArray) {
    for (var i = 0; i < photoArray.length; i++) {
      photoArray[i].index = i;
    }
    return photoArray;
  }

};

export default decorate;