import React, { useState } from 'react';
import '../styles/style.css';

const StarRating = ( {handleChange }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [message, setMessage] = useState('');

  // const spanStyle = {
  //   'color': ratingValue <= rating ? 'blue' : 'green',
  //   'background-color': 'yellow',
  //   'font-size': '100px'
  // };

  return (
    <div className="starRating">
      <p>On a Scale from 1 to 5, how would you rate this product?</p>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="overallRating"
              value={ratingValue}
              onClick={() => {

                setRating(ratingValue);
                if (ratingValue === 1) {
                  setMessage('Poor');
                } else if (ratingValue === 2) {
                  setMessage('Fair');
                } else if (ratingValue === 3) {
                  setMessage('Average');
                } else if (ratingValue === 4) {
                  setMessage('Good');
                } else if (ratingValue === 5) {
                  setMessage('Great');
                }

              }}
              onChange={handleChange}
            />
            <span
              style={{
                'color': ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9',
                'font-size': '30px'
              }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >★</span>
          </label>
        );
      })}
      <p>{message}</p>
    </div>
  );
};

export default StarRating;