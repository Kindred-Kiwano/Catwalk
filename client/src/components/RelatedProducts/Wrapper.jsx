import React from 'react';
import Carousel from './Carousel.jsx';
import UserContext from './UserContext.jsx';


export default function Wrapper(Component, data) {
  return function WrappedComponent(props) {
    return (
      <UserContext.Consumer>
        { context => <Component data={data} context={context} {...props} /> }
      </UserContext.Consumer>
    );
  };
}


// export const Wrapper = (Component, sourceData, props) => {

//   return class WrappedComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data: sourceData
//       };
//     }

//     render() {
//       let {data} = this.state;
//       return (
//         <UserContext.Consumer>
//           <Component data={data} {...props} />
//         </UserContext.Consumer>
//       );
//     }
//   };
// };
