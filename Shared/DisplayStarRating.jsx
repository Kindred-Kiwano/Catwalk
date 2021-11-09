import React from 'react';
import '../client/src/components/Reviews/styles/style.css';

const fillEmptySlots = (ratingsObj) => {
  for (var i = 1; i <= 5; i++) {
    if (!ratingsObj[i]) {
      ratingsObj[i] = 0;
    }
  }
  return ratingsObj;
};


const DisplayStarRating = ({ ratings }) => {

  ratings = fillEmptySlots(ratings);
  const totalScore = Number(ratings[1]) + Number(ratings[2]) * 2 + Number(ratings[3]) * 3 + Number(ratings[4]) * 4 + Number(ratings[5]) * 5;
  const avgNum = Number(ratings[1]) + Number(ratings[2]) + Number(ratings[3]) + Number(ratings[4]) + Number(ratings[5]);
  console.log('totalScore:', totalScore);
  console.log('avgNum:', avgNum);
  const totalAvg = totalScore / avgNum;
  const roundedNum = (Math.round(totalAvg * 4) / 4).toFixed(2);

  return (
    <div className="Stars" style={{'--rating': `${parseFloat(roundedNum)}`}}></div>
  );
};


export default DisplayStarRating;
