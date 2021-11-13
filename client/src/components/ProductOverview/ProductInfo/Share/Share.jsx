import React from 'react';

var alertComingSoon = (event) => {
  event.preventDefault();
  alert('This feature is coming soon. Thank you for your patience!');
};

var Share = () => {

  return (
    <div id="share">
      <h5>Share on social media:</h5>
      <a href="#" onClick={alertComingSoon}>Facebook</a>
      &ensp; • &ensp;
      <a href="#" onClick={alertComingSoon}>Twitter</a>
      &ensp; • &ensp;
      <a href="#" onClick={alertComingSoon}>Pinterest</a>
    </div>
  );
};

export default Share;
