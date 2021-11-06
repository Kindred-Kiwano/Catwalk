const express = require('express');
const router = express.Router();

const {
  getRelatedIds,
  getStyle,
  getStyles,
  getProductData,
  formatStylesData,
  getFeatures
} = require('Related');


router.get('/:id', async (req, res) => {
  let {id} = req.params;
  try {
    const ids = await getRelatedIds(id)
    res.send(ids.data);
  } catch (error) {
    res.send(error);
  }
});

router.get('/features/:id', async (req, res) => {
  let {id} = req.params;
  try {
    let features = await getFeatures(id);
    res.send(features.data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/styles/:id', async (req, res) => {
  let {id} = req.params;
  try {
    let styles = await getStyles(id)
    res.send(styles.data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;