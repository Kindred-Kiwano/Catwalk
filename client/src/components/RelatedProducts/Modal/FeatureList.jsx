import React from 'react';
import Feature from './Feature.jsx';


const FeatureList = (props) => {

  let { features } = props;

  //get current product features from context
  //write helper function to compare and conditionally render

  let featureList = features.map(spec =>
    <Feature
      feature={ spec.feature }
      value={ spec.value }
      current={ true }
      target={ false }
    />
  );

  return (
    <ul className='features'>
      { featureList }
    </ul>
  );
};

export default FeatureList;