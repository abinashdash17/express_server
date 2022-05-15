const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/cats', (request, response) => {
    response.send('list of cats');
  });
  return router;
};
