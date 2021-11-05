import React from 'react';
import Carousel from './Carousel.jsx';
import UserContext from './UserContext.jsx';


export default function Wrapper(Component, data, props) {
  return function WrappedComponent() {
    return (
      <UserContext.Consumer>
        { context => <Component data={data} context={context} {...props} /> }
      </UserContext.Consumer>
    );
  };
}
