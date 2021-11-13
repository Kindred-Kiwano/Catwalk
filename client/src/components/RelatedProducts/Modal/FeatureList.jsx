import React from 'react';
import Feature from './Feature.jsx';


const FeatureList = (props) => {

  let { list } = props;

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


  let sampleListB = [
    {
      'feature': 'Mid-Sole',
      'value': 'ControlSupport Arch Bridge'
    },
    {
      'feature': 'Stitching',
      'value': 'Double'
    }
  ];

  let featureList = sampleListA.map(spec => <Feature feature={spec.feature} value={spec.value}/> );

  return (
    <ul>
      { featureList}
    </ul>
  );
};

export default FeatureList;