import React from 'react';
import Feature from './Feature.jsx';


const FeatureList = (props) => {

  let { features } = props;
  console.log(features, 'sefdg')

  let sampleListA = [
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

  let featureList = features.map(spec => <Feature
    feature={spec.feature}
    value={spec.value}
  />);

  return (
    <ul className='features'>
      {featureList}
    </ul>
  );
};

export default FeatureList;