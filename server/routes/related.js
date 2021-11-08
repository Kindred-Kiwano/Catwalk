const express = require('express');
const router = express.Router();

const {
  getRelatedIds,
  getProductData,
  getStyles,
  formatStyle,
  formatStyles,
} = require('../../Shared/related.js');

router.get('/', (req, res) => {
  try {
    res.status(200).send('<h1 style="color:hotpink"><em>Fix Me</em></h1>');
  } catch (error) {
    res.status(418).send(error);
  } //should return a list of products
});

router.get('/related/:id', async (req, res) => {
  let {id} = req.params;
  try {
    const ids = await getRelatedIds(id);
    res.status(200).send(ids.data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res) => {
  let {id} = req.params;
  try {
    let product = await getProductData(id);
    res.status(200).send(product.data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/styles/:id', async (req, res) => {
  let {id} = req.params;
  try {
    let styles = await getStyles(id)
      .then(styles => formatStyles(styles.data))
      .then(array => res.status(200).send(array));
  } catch (error) {
    res.status(400).send(error);
  }
}); //working ! sends an array of formatted objects, to be extended with basic data after initial render

module.exports = router;