var pickImage = {
// takes an image gallery (array) and an index to start from
  shiftVisibles: function(startFrom, imageGallery) {
    return imageGallery.slice(startFrom, startFrom + 7);
  }
};

export default pickImage;