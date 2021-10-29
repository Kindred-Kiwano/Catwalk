// serve static files
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.listen(PORT, () => {
  console.log(`Serving static files at port ${PORT}`);
});
