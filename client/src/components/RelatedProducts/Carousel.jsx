import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [ {}, {}, {} ],
      start: 0, //index of array to start render
      last: false, //if last index is at rightmost spot in DOM carousel rendering
      width: 3
    };
  }

  scroll(e) {

  }

  sticky() {

  }

  calculatePosition(css) {
    // get CSS position of card relative to container
  }

  

  add(id, list) {
    // update global state for corresponding list
  }

  remove(id, list) {
    // splice global state for corresponding list
  }

  render() {
    let {type, list} = this.props;
    return (
      <div className="carousel">
        {/* For each item in list, render a card Component */}
      </div>
    );
  }
}

export default Carousel;