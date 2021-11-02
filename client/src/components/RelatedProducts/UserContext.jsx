import React from 'react';
import ReactDOM from 'react-dom';

import Outfit from './Outfit.jsx';
import Related from './Related.jsx';
import Card from './Card.jsx';

import productList from '../../../../fakeData/productList.js';

const UserContext = React.createContext({});

export default UserContext;