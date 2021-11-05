import React from 'react';


const Feature = (props) => {
  let {feature, value, current, target} = props;

  let sample = {feature: 'Satisfaction Guaranteed', value: 'ok'};

  if (current && target) {
    //conditionally render
  }

  return (
    <li className={'feature'}>
      <p className={'feature-title'}>
        <em>{feature}</em><br/>
      </p>
      {
        value ? <p className={'feature-value'}>{value}<br/></p> : <></>
      }
    </li>
  );
};

export default Feature;