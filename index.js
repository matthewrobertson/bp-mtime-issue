
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});