import React from 'react';


const Feature = (props) => {
  let {feature, value} = props;


  let sample = {feature: 'Satisfaction Guaranteed', value: 'ok'};


  return (
    <li className={'feature'}>
      <p className={'feature-title'}>
        <em>{feature}</em><br/>
        {
          value ? <p classname={'feature-value'}>{value}<br/></p> : null
        }
      </p>
    </li>
  );
};

export default Feature;