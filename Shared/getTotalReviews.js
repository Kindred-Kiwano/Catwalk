const getTotalReviews = (ratingsObj) => {

  let totalReviews = 0;
  for (var key in ratingsObj) {
    totalReviews += Number(ratingsObj[key]);
  }
  return totalReviews;
};

export default getTotalReviews;