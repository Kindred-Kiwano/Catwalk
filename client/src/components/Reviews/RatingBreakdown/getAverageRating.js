import React from 'react';

const fillEmptySlots = (ratingsObj) => {
  for (var i = 1; i <= 5; i++) {
    if (!ratingsObj[i]) {
      ratingsObj[i] = 0;
    }
  }
  return ratingsObj;
};

const getAverageScore = (ratings) => {
  ratings = fillEmptySlots(ratings);
  const totalScore = Number(ratings[1]) + Number(ratings[2]) * 2 + Number(ratings[3]) * 3 + Number(ratings[4]) * 4 + Number(ratings[5]) * 5;
  const avgNum = Number(ratings[1]) + Number(ratings[2]) + Number(ratings[3]) + Number(ratings[4]) + Number(ratings[5]);
  const totalAvg = totalScore / avgNum;
  const roundedNum = (Math.round(totalAvg * 4) / 4).toFixed(2);
  return roundedNum;
};


export default getAverageScore;
