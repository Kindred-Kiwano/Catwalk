// serve static files
const express = require('express');
const related = require('./routes/related');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());
app.use('/products', related);


app.listen(PORT, () => {
  console.log(`Serving static files at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('<h1 style="color:hotpink"><em>Fix Me</em></h1>');
});