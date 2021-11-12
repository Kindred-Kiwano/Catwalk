import React from 'react';
import { useState } from 'react';
import '../styles/style.css';

var ReviewItem = (props) => {

  const [currentHelpfulCount, setCurrentHelpfulCount] = useState(props.review.helpfulness);
  const [alreadyClicked, setAlreadyClicked] = useState(false);

  const handleHelpfulClick = () => {
    if (alreadyClicked === false) {
      props.review.helpfulness++;
      setCurrentHelpfulCount(currentHelpfulCount + 1)
      setAlreadyClicked(!alreadyClicked);
    } else {
      alert('You already clicked that.');
    }
  };

  const handleReport = () => {
    alert('something will happen here');
  };

  return (
    <div className="reviewItem">
      <div className="reviewTopSection">
        <div className="Stars" style={{"--rating": `${props.review.rating}`}}>
        </div>
        <div className="reviewerAndDate">
        By {props.review.reviewer_name}, {props.review.date.slice(0, -14)}
        </div>
      </div>
      <div className="reviewMidSection">
        <div className="reviewSummary">
          {props.review.summary}
        </div>
        <div className="reviewBody">
          {props.review.body}
        </div>
        {props.review.recommend ? (<div className="productRecommended">
          ✔ I recommend this product.
        </div>) : (<div></div>)}
      </div>
      <div className="reviewBottomSection">
        <div className="reviewHelpful">
          Helpful?
          <button onClick={handleHelpfulClick}> Yes </button>
          {currentHelpfulCount} | <button onClick={handleReport}> Report </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;