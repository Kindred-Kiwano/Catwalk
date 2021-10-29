// babel should compile anything imported here and anything imported to those files

import ReactDOM from 'react-dom';
import React from 'react';
import Dummy from './components/Dummy.jsx';
import ProductOverview from './components/ProductOverview/ProductOverview.jsx';

ReactDOM.render(<ProductOverview />, document.getElementById('app'));