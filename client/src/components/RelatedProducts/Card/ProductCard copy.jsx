import React from 'react';
import CardButton from './CardButton.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';
import Card from './Card.jsx';

class ProductCard extends Card {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      product: null,
      images: this.props.images || [], //add this functionality
      img: this.props.img
    };
  }

  render() {
    //   let { type, product, label } = props;
    //   let {images, img} = product;
    return(
      <>
        <header className='card' id={product.id}>
          <CardImage img={img} images={images} click={() => console.log(product)}/>
        </header>
        <CardInfo product={product} />
      </>
    );
  }
}

// const ProductCard = (props) => {
//   // img = 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

// };
