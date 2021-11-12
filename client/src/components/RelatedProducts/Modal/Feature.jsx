import React from 'react';


const Feature = (props) => {
  let {feature, value} = props
  // if () {

  // }

  let sample = {feature: 'Satisfaction Guaranteed', value: 'ok'};


  return (
    <li className={'feature'}>
      {/* {feature} */}
      <p className={'feature-title'}>
        <em>{feature}</em><br/>
        {
          value ? <p classname={'feature-value'}>{value}<br/></p> : null
        }
      </p>
      {/* {feature} */}
    </li>
  );
};

export default Feature;