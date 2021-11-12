import React, { useState } from 'react';
import '../styles/style.css';

const Characteristics = ( { handleChange, title, properTitle, messageOptions, leftWord, rightWord, middleWord } ) => {

  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState('');
  const [sentiment, setSentiment] = useState(null);
  const [messageColor, setMessageColor] = useState(null);
  const colorArray = ['black', 'red', 'orange', 'green', 'blue', 'purple'];
  return (
    <div className="individualChar">
      <h1>{properTitle}</h1>
      <p>How would you describe the {title} of the item?</p>
      <span> {leftWord}
        {messageOptions.map((message, i) => {
          const ratingNum = i + 1;
          const ratingValue = ratingNum.toString();
          return (
            <label>
              <input
                name={title}
                type="radio"
                style={{'background-color': messageColor}}
                value={ratingValue}
                onChange={handleChange}
                onClick={() => {
                  setRating(ratingValue);
                  setMessage(messageOptions[i].message);
                  setSentiment(messageOptions[i].sentiment);
                  setMessageColor(colorArray[messageOptions[i].sentiment]);
                  console.log(messageColor);
                }}
                checked={rating === ratingValue}
              />
            </label>
          );
        })}
        {rightWord}</span>
      <p className="test" style={{'color': messageColor}}>{message}</p>
    </div>
  );
};

export default Characteristics;
//<p className="test" style={{'--rating': `${sentiment}`}}>{sentiment}</p>