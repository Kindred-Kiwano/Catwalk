import React from 'react';
import Feature from './Feature.jsx';


const FeatureList = (props) => {

  let sampleList = [{feature: 'Satisfaction Guaranteed', value: 'ok'}];
  let featureList = sampleList.map(spec => {
    <Feature />
  })

  return (
    <ul>
      {featureList}
    </ul>
  )
};

export default FeatureList;