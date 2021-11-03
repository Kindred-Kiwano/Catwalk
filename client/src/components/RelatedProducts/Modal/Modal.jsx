import React from 'react';
import ReactDOM from 'react-dom';
import UserContext from '../UserContext.jsx';
import Related from '../Related.jsx';
import Feature from './Feature.jsx';
import FeatureList from './FeatureList.jsx';

import '../styles/modalStyle.css';
let { modal } = Related;

const Modal = (props) => {

  let {visible} = props

  let {userOutfit, setUserOutfit} = React.useContext(UserContext);
  let {currentProduct, setCurrentProduct} = React.useContext(UserContext);

  let features = [];
  if (currentProduct) {
    features = modal(currentProduct);
  }

  return (
    <>
      { visible ?
        <div id={'modal'} onClick={(visible)=>{visible = !visible}}>
          <header>
            <h3>COMPARING</h3>
          </header>
          <main className={'modal'}><br/>
            <ul>
              <FeatureList />
            </ul>
          </main>
        </div>
        :
        <></>
      }
    </>
  );
};


export default Modal;