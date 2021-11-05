import React from 'react';
import Feature from './Feature.jsx';
import FeatureList from './FeatureList.jsx';

import '../styles/modalStyle.css';

const Modal = (props) => {
  let visible = props.data;
  let {features, toggle} = props;

  features = features || [
    {
      'feature': 'Sole',
      'value': 'Rubber'
    },
    {
      'feature': 'Material',
      'value': 'FullControlSkin'
    },
    {
      'feature': 'Mid-Sole',
      'value': 'ControlSupport Arch Bridge'
    },
    {
      'feature': 'Stitching',
      'value': 'Double Stitch'
    }
  ];

  return (
    <>
      { visible ?
        <div id={'modal'} onClick={() => toggle(visible = !visible)}>
          <header>
            <h3>COMPARING</h3>
          </header>
          <main className={'modal'}><br/>
            <FeatureList features={features}/>
          </main>
        </div>
        :
        null
      }
    </>
  );
};


export default Modal;