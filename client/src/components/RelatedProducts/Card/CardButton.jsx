

class ProductCard extends Card {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      product: null,
      images: [],
      img: images[0]
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


export default ProductCard;