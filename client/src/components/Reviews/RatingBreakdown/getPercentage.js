const getPercentage = (ratingsObj) => {

  for (let key in ratingsObj) {
    ratingsObj[key] = Number(ratingsObj[key]);
  }
  for (let i = 1; i <= 5; i++) {
    if (!ratingsObj[i]) {
      ratingsObj[i] = 0;
    }
  }
  let ratingsArr = [];
  let highestVal = ratingsObj[1];
  for (let key in ratingsObj) {
    if (ratingsObj[key] > highestVal) {
      highestVal = ratingsObj[key];
    }
    ratingsArr.push(ratingsObj[key]);
  }
  let percentageArr = [];
  for (var i = 0; i < ratingsArr.length; i++) {
    let outOfFive = (ratingsArr[i] / highestVal) * 5;
    percentageArr.push(outOfFive);
  }
  return percentageArr;
};

export default getPercentage;