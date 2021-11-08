import React from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';

import { extendStyleToProduct } from '../../../../../Shared/related.js';

var products = axios.create({ baseURL: 'http://localhost:3000/products' });

class ProductCard extends Card {

  // each card should dynamically render data as needed
  // carousel will only store a list of IDs
  // use state in cards
  // use context to keep track of modal / methods / shared functions

  //write tests

  //refactor to use HOCs - add product data to basic button/click template
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      // product: null,
      // images: [],
      // img: null
    }
  }

  componentDidMount() {
    this.getProductById()
  }

  componentDidUpdate() {
    this.render()
  }

  async getProductById() {
    let { id } = this.state
    if (id) {
      try {
        var [stats, styles] = Promise.all([
          await products.get(`/${id}`),
          await products.get(`/styles/${id}`) //
        ])
          // .then(arr => arr.map(a => a.data)) //
          .then(data => {
            let [source, target] = data;
            return target.map((t) =>
              extendStyleToProduct(t, source));
          })
          .then(result => {
            console.log(result, 'result')
            let product = result[0] //inefficient
            let {
              img, id, images
            } = result

            this.setState({
              product,
              id,
              img,
              images
            });
          })
          .catch(console.error)

      } catch (error) {
        console.error(error);
      }
    }

  }

  render() {
    console.log(this.state, 'card state')
    let { id, img, images, product } = this.state
    return (
      <Card>
        {product ?
          <>
            <header className='card' id={id}>
              <CardImage {...{product}} click={() => console.log(product)} />
            </header>
            <CardInfo product={product} />
          </>
          : ''
        }
      </Card>
    );
  }
};

export default ProductCard;
