const express = require('express');
const products = express.Router();

const {
  getRelatedIds,
  getProductInfo,
  getProducts,
  getStyles,
  formatInfo,
  formatStyles,
  hasArrayParams,
  parseArrayParams
} = require('../../Shared/products.js');

// products.use('/all', async (req, res, next) => {
//   let {url} = req
//   try {

    // var valid = await hasArrayParams(url)
    // if (!valid) throw 'expected an array'

    // var array = await parseArrayParams(url)
    // let [URL, ids] = array
    // console.log(URL, 'new url', url, 'original')


    /*

    Attempting to create a middleware/route interceptor/prefix that can accept an array of params and forward them on, for each argument. Need a way to aggregate data or reroute back to this endpoint

    // res.redirect('/products' + '/' + URL + id) // this doesn't work
    // products.get(URL + id) // this doesn't work
  */

//     next()
//   } catch (error) {
//     res.send(error)
//     next()
//   }
// })

products.get('/', async (req, res) => { //get a basic list of product info
  console.log( new URL(req.url, `http://${(req.headers.host)}`))
  console.log(res.url, 'res')
  try {
    var list
    var products = await getProducts()
    .then(products => products.data)
    .then(results => Promise.allSettled(results.map(p => formatInfo(p))))
    .then(results => results.map(result => result.value))
    .then(success => res.status(200).send(success))
    .catch(err => console.error(err))
  } catch (error) {
    res.status(404).send('Invalid Product ID')
  }
});

products.get('/related/:id', async (req, res) => { // Returns an array of ids
  try {
    let {id} = req.params;
    const ids = await getRelatedIds(id)
    res.status(200).send(ids.data)
  } catch (error) {
    res.status(400).send(error);
  }
});

products.get('/related/all/:id', async (req, res) => {

  // Returns an array of aggregated styles for all ids related to the requested id

  try {
    let {id} = req.params;
    const ids = await getRelatedIds(id)
    const styles = Promise.allSettled(ids.data.map(async i => {
      var style = await getStyles(i)
      var formatted = await formatStyles(style.data)
      return formatted
    }))
    .then(success => success.map(result => result.value))
    .then(allRelated => res.status(200).send(allRelated))
  } catch (error) {
    res.status(404).send('Invalid Product ID')
  }
});

products.get('/info/:id', async (req, res) => {

  // Returns basic info for one product WITH features

  try {
    let {id} = req.params;
    let product = await getProductInfo(id)
    .then(product => formatInfo(product.data))
    .then(prod => res.status(200).send(prod))
  } catch (error) {
    res.status(404).send('Invalid Product ID')
  }
});

products.get('/styles/:id', async (req, res, next) => {

  // Working well! sends an array of formatted objects, to be extended with basic data after initial render
  // ** Does not include "features" for modal popup

  try {
    let {id} = req.params;
    let styles = await getStyles(id)
      .then(styles => formatStyles(styles.data))
      .then(array => res.status(200).send(array))
  } catch (error) {
    res.status(404).send('Invalid Product ID')
  }
});


products.get('/features/:pair', async (req, res) => { // [id1, id2].join() -> '123,456', from App
  try {
  let ids = await req.params.pair.split(',').map(Number) // pair -> [123, 456]
  .then(ids => Promise.all( ids.map(id => getProductInfo(id)) ))
  .then(result => res.send(result))

  let [current, target] = ids

  res.status(200).send(ids)

  } catch (error) {
    res.status(404).send('Invalid Product ID(s)')
  }
})


module.exports = products;