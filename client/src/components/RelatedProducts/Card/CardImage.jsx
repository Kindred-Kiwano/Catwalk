import React from 'react';

class CardImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
    };
  }

  componentDidMount() {
    let {product, img, images} = this.props;

    this.setState({
      product,
      images,
      img
    })
  }

  rotateImages() {
    let {images, index, img} = this.state
    index = (index < images.length) ? index++ : 0;
    img = images[index];
    console.log('hello', images.length)
    this.setState({
      img,
      index
    })
  }

  render() {
    let { img, images, product } = this.props.product;
    let { description, click, id } = this.props;

    img = img || 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

    return (
      <>
        <img src={img}
          role='img'
          title={description || 'broken'}
          onClick={() => this.rotateImages()}
          // onClick={() => click(id)}
        />
      </>
    );
  }
}



export default CardImage;
