const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/dogs', (request, response) => {
    response.send('list of dogs');
  });
  router.get('/dogs/:dogName', (request, response) => {
    const { dogName } = request.params;
    response.send(`dogname : ${dogName}`);
  });
  return router;
};
