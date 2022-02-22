const express = require('express');
const products = require('./routes/products.js');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());
app.use('/products', products);


app.listen(PORT, () => {
  console.log(`Now listening at http://localhost:${PORT}`);
});
