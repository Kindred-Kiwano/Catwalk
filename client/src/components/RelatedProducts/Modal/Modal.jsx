import React from 'react';
import ReactDOM from 'react-dom';
import UserContext from '../UserContext.jsx';
// import Related from '../Related.jsx';
import Feature from './Feature.jsx';
import FeatureList from './FeatureList.jsx';

import '../styles/modalStyle.css';
// let { modal } = Related;

const Modal = (props) => {

  let {data, toggle} = props


  let visible = data

  let {userOutfit, setUserOutfit} = React.useContext(UserContext);
  let {currentProduct, setCurrentProduct} = React.useContext(UserContext);

  let features = [];
  if (currentProduct) {
    // features = modal(currentProduct, 61590);
  }

  return (
    <>
      { visible ?
        <div id={'modal'} onClick={toggle}>
          <header>
            <h3>COMPARING</h3>
          </header>
          <main className={'modal'}><br/>
            <FeatureList list={features}/>
          </main>
        </div>
        :
        <></>
      }
    </>
  );
};


export default Modal;