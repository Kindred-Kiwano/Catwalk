import React, { useState } from 'react';
import Characteristics from './Characteristics.jsx';
import '../styles/style.css';

const CharList = ( { handleChange, char } ) => {

  return (
    <div className="CharList">
      <fieldset>
        <legend>Characteristics</legend>
        <div className="actualList">
          {char.map((item) => {
            return (
              <Characteristics
                handleChange={handleChange}
                title={item.title}
                properTitle={item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                messageOptions={item.messageOptions}
                leftWord={item.leftWord}
                rightWord={item.rightWord}
                middleWord={item.middleWord}
              />
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};

export default CharList;