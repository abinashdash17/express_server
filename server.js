const express = require('express');

const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`express listening on port (dev and no dev): ${port}`);
});
