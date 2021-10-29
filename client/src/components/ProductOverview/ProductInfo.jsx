import React from 'react';

const ProductInfo = (props) => {
  return (
    <div>
      <div id="info-header">
        {/* <StarReview /> */}
        <span>Read all x reviews </span>
        <span>x in stock</span>
      </div>
      <p id="product description">
        Be the next cool kid on the block.
      </p>
    </div>
  );
};

export default ProductInfo;