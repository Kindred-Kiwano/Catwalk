import React, { useState } from 'react';
import '../styles/style.css';

const Characteristics = ( { handleChange, messageOptions, title } ) => {

  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState('');

  return (
    <div className="boddy">
      <p>How would you describe the {title} of the item?</p>
      {[...Array(5)].map((item, i) => {
        const ratingNum = i + 1;
        const ratingValue = ratingNum.toString();
        return (
          <label>
            <input
              name={title}
              type="radio"
              value={ratingValue}
              onChange={handleChange}
              onClick={() => {
                setRating(ratingValue);
                console.log(ratingValue);
                setMessage(messageOptions[i]);
              }}
              checked={rating === ratingValue}
            />
          </label>
        );
      })}
      <p>{message}</p>
    </div>
  );
};

export default Characteristics;