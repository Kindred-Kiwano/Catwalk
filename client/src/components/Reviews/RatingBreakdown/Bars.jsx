import React, { useState } from 'react';
import '../styles/style.css';

const Bars = ( { percentRating, starNum, handleStarNumClick } ) => {

  return (
    <div className="eachBar">
      <div className="barText" value={starNum}> <button onClick={handleStarNumClick} value={starNum}> {starNum} Stars:</button> </div>
      <div className="Bars" style={{'--rating': `${percentRating}`}}></div>
    </div>
  );
};


export default Bars;