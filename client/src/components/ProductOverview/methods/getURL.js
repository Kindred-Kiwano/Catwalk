// might not need this oh well!

var getURL = {
  reformatURLObject: function(photos) {
    var thumbnailToFull = {};
    var currentPair;
    for (var i = 0; i < photos.length; i++) {
      currentPair = photos[i];
      thumbnailToFull[currentPair.thumbnail_url] = currentPair.url;
    }
    return thumbnailToFull;
  }
};

export default getURL;
