const express = require('express');

// const path = require('path');
// const routes = require('./routes/index'); // for complex routing enable this

const app = express();
const port = 3000;

// for complex routing
// app.use('/', routes());

// for simple routing
app.get('/', (request, response) => {
  response.send('simple homepage');
});
app.get('/:pageName', (request, response) => {
  const { pageName } = request.params;
  // const { subpage } = request.params;
  response.send(`other page: ${pageName}`);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`express listening on port (dev and no dev): ${port}`);
});
