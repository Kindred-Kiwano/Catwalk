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
  parseArrayParams,
  extendStyleToProduct
} = require('../../Shared/products.js');

products.get('/', async (req, res) => {

  console.log(new URL(req.url, `http://${req.headers.host}`));

  try {
    var list;
    var products = await getProducts()
      .then(products => products.data)
      .then(results => Promise.allSettled(results.map(product => formatInfo(product))))
      .then(resolved => resolved.map((result) => result.value))
      .then(success => res.status(200).send(success))
  } catch (error) {
    res.status(404).send('Invalid Product ID');
  }
});

products.get('/related/:id', async (req, res) => {
  // Returns an array of ids
  try {
    var { id } = req.params;
    var ids = await getRelatedIds(id);
    res.status(200).send(ids.data);
  } catch (error) {
    res.status(400).send(error);
  }
});

products.get('/related/all/:id', async (req, res) => {
  // Returns an array of aggregated styles for all ids related to the requested id

  try {
    var { id } = req.params;
    var ids = await getRelatedIds(id);
    var styles = await Promise.allSettled(
      ids.data.map(async (id) => {
        var info = await getProductInfo(id);
        var style = await getStyles(id);
        var formattedStyles = await formatStyles(style.data); //works
        var formattedInfo = await formatInfo(info.data);
        var extended = await extendStyleToProduct(formattedStyles, formattedInfo)
        return extended
      })
    );
    var result = await styles.map((settledPromise) => settledPromise.value);
    res.status(200).send(result);
    console.log(result, 'Success');

  } catch (error) {
    res.status(404).send('Invalid Product ID');
  }
});

products.get('/info/:id', async (req, res) => {
  // Returns basic info for one product w/ Features for Modal

  try {
    var { id } = req.params;
    var product = await getProductInfo(id)
    var formattedProduct = await formatInfo(product.data)
    res.status(200).send(prod);
  } catch (error) {
    res.status(404).send('Invalid Product ID');
  }
});

products.get('/styles/:id', async (req, res, next) => {
  // ** Does not include "features" for modal popup

  try {
    var { id } = req.params;
    var styles = await getStyles(id)
    var formattedStyles = await formatStyles(styles.data)
    res.status(200).send(formattedStyles);
  } catch (error) {
    res.status(404).send('Invalid Product ID');
  }
});

module.exports = products;