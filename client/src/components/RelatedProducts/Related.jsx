import React from 'react';
import axios from 'axios';

import { extendStyleToProduct } from '../../../../Shared/related.js';

import Carousel from './Carousel.jsx'

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 61586,
      relatedProducts: [],
      userOutfit: []
    };
  }

  async componentDidMount() {
    try {
      var [stats, styles] = Promise.all([
        await products.get(`/${this.state.currentProduct}`),
        await products.get(`/styles/${this.state.currentProduct}`)
      ])
      .then(arr => arr.map(a => a.data))
      .then(data => {
        let [source, target] = data;
        return target.map((t) =>
        extendStyleToProduct(t, source));
      })
      .then(result => {
        this.setState({
          relatedProducts: result
        });
      })
      .catch(console.error)

    } catch (error) {
      console.console.error(error);
    }
  }

  async populateCarousel() {
    try {
      var outfit = await products.get(`/related/${this.state.currentProduct}`)
    } catch (error) {

    }
  }

  render() {
    // let list = this.state.relatedProducts
    return (
      <>
        {/* <Carousel list={list} /> */}
      </>
    );
  }
}

export default Related;


// Related.modal = (current, target) => {
//   var comparisons = {};
//   Related.getFeatures(current)
//     .then(list => comparisons[current] = list)
//     .then(Related.getFeatures(target))
//     .then(list => comparisons[target] = list)
//     .then(() => comparisons)
//     // .then(stats => stats.forEach(stat => {
//     //   comparisons[stat['feature']] = stat['value'] || '';
//     // }))
//     // .then(() => console.log(comparisons))
//     .catch(err => console.log(err));

// };


// ////////

// Related.populateAsync = async (arr, cb) => {
//   return await Promise.all(arr.map(a => cb(a)))
//     .catch(e => console.log(e));
// };

// export const getRelatedIds = async (id) => {
//   let ids = await axios.get(`/products/${id}`);
//   return ids.data;
// };

// export const getProductData = async (id) => {
//   return axios.get(`/products/${id}`);
//     .then(product => product.data)
// };

// Related.getStyles = async (id) => {
//   let styles = await axios.get(`/products/${id}/styles`)
//   let cardInfo = Related.formatStylesData(styles)
//   return cardInfo //one formatted product
// };

// Related.getStyle = async (id) => {
//   let styles = await axios.get(`/products/${id}/styles`)
//   let cardInfo = Related.formatStylesData(styles)
//   return cardInfo //one formatted product
// };

// Related.formatStyle = (prod) => {
//   let {results, product_id} = prod;

//   let {sale_price, original_price, photos} = results[0];
//   return {
//     id: product_id,
//     sale: sale_price,
//     price: original_price,
//     img: photos[0].url
//   }; //extend with more data
// };

// Related.formatStyles = (products) => products.map(p => formatStyle(p));

// Related.compareFeatures = (current, c, target, t) => {
//   var specs = {};
//   //array of arrays - Object.entries for features, compare with values
//   var extendObjects = (arr, id) => {
//     for (var spec in arr) {
//       let stat = Object.entries(spec);
//       let k = stat[0];
//       let v = stat[1];
//       if (!specs[k]) {
//         specs[k] = v;
//       }

//       if (specs[k][v] === undefined) {
//         specs[k][v] = [id];
//       } else if (specs[k] === v) {
//         specs[k][v] = ''; //fix this
//       }
//     }
//   };

//   //iterate through first object, push all feature values to array as keys, with value as value
//   // if
// };

// const features = [
//   {
//     'feature': 'Sole',
//     'value': 'Rubber'
//   },
//   {
//     'feature': 'Material',
//     'value': 'FullControlSkin'
//   },
//   {
//     'feature': 'Mid-Sole',
//     'value': 'ControlSupport Arch Bridge'
//   },
//   {
//     'feature': 'Stitching',
//     'value': 'Double Stitch'
//   }
// ];

// // export default Related;
