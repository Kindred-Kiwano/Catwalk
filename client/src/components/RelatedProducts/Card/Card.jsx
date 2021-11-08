import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id || 0 //current product ID from global state- add to cart on click
    };
  }

  handleClick(id) {
    return this.props.click(id);
  }

  showComparisons() {
    //toggle modal, add another onClick
  }

  render() {
    let { click, label } = this.props;
    let { id } = this.state;

    let text = {
      outfit: 'ⓧ',
      related: '★',
      addToOutfit: '+'
    };

    return (
      <div className={`card card-${label}`} id={id}>
        <button className={'btn-' + label}
          role={'button'}
          onClick={() => this.handleClick(id)}>
          { text[label] }
        </button>
        {this.props.children}
      </div>
    );
  }
}

export default Card;