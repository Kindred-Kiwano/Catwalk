const express = require('express');
const products = express.Router();

const {
  getRelatedIds,
  getProductInfo,
  getProducts,
  getStyles,
  formatInfo,
  // formatStyle,
  formatStyles,
} = require('../../Shared/related.js');

const parseArrayParams = (url) => {
  let path = url.split('/')
  let last = path.pop()
  let params = last.split(',').map(Number)
  let base = path.join('/') + '/';
  return [base, params]
}

const hasArrayParams = url => url.includes(',')

products.get('/', async (req, res) => { //get a list of product info
  try {
    var list
    var products = await getProducts()
    .then(products => products.data)
    // .then(console.log)
    .then(results => list = Promise.all(results.map(p => formatInfo(p))))
    .then(result => res.status(200).send(result))
    .catch(err => console.error(err))

  } catch (error) {
    res.status(404).send('Invalid Product ID')
  }
});

products.use('/all', async (req, res, next) => {
  let {url} = req
  try {
    var valid = await hasArrayParams(url)
    if (!valid) throw 'expected an array'
    var array = await parseArrayParams(url)
    let [URL, ids] = array
    console.log(req)
      ids.forEach(id =>
        console.log(products)
        // res.redirect('/products' + URL + id) // this doesn't work
        // products.get(URL + id) // this doesn't work
      )


    // res.send(array)

    next()
    res.end()
  } catch (error) {
    res.send(error)
    next()
  }
})

products.get('/related/:id', async (req, res) => { //returns an array of ids
  try {
    let {id} = req.params;
    const ids = await getRelatedIds(id)
    res.status(200).send(ids.data)
  } catch (error) {
    res.status(400).send(error);
  }
});

products.get('/related/all/:id', async (req, res) => { //returns an array of aggregated styles for all ids
  try {
    let {id} = req.params;
    console.log(req.url)
    const ids = await getRelatedIds(id)
    const styles = Promise.allSettled(ids.data.map(async i => {
      var style = await getStyles(i)
      var formatted = await formatStyles(style.data)
      return formatted
    }))
    .then(allRelated => res.status(200).send(allRelated))
  } catch (error) {
    res.status(404).send('Invalid Product ID')
  }
});

products.get('/info/:id', async (req, res) => { // Returns basic info for one product
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
  try {
    let {id} = req.params;
    let styles = await getStyles(id)
      .then(styles => formatStyles(styles.data))
      .then(array => res.status(200).send(array))
  } catch (error) {
    res.status(404).send('Invalid Product ID')
  }
}); // Working ! sends an array of formatted objects, to be extended with basic data after initial render

products.get('/features/:pair', async (req, res) => { //[id1, id2].join() -> '123,456'
  try {
  let ids = req.params.pair.split(',').map(Number) // pair -> [123, 456]
  let [current, target] = ids

  if (Number.isNaN(current) || Number.isNaN(current)) {
    throw 'error'
  }

  var features = await Promise.allSettled(ids.map()) //something

  } catch (error) {
    res.status(404).send('Invalid Product ID(s)')
  }
})


module.exports = products;