// babel should compile anything imported here and anything imported to those files

import ReactDOM from 'react-dom';
import React from 'react';
// add Dummy.jsx to the gitignore so everyone can use a local copy as the head of their react components

import Dummy from './components/Dummy.jsx';
// import Carousels from './components/Carousels.jsx';

//Feel free to comment out any components as necessary!

ReactDOM.render(
  <>
    <Dummy />
    {/* <Carousels /> */}
  </>,
  document.getElementById('app'));

