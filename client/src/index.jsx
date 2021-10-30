// babel should compile anything imported here and anything imported to those files

import ReactDOM from 'react-dom';
import React from 'react';
import Dummy from './components/Dummy.jsx';

ReactDOM.render(<Dummy />, document.getElementById('app'));