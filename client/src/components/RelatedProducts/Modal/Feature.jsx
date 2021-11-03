import React from 'react';


const Feature = (props) => {
  let {current, target, feature} = props
  // if () {

  // }

  let sample = {feature: 'Satisfaction Guaranteed', value: 'ok'};


  return (
    <li className={'feature'}>
      {props.current.feature}
      <p className={'feature-title'}>
        <em>{sample.feature}</em><br/>
        {
          sample.value ? <p classname={'feature-value'}>{sample.value}<br/></p> : null
        }
      </p>
      {props.target.feature.feature}
    </li>
  )
}

export default Feature;