const express = require('express');
const dogs = require('./dogs');
const cats = require('./cats');

const router = express.Router();
module.exports = () => {
  router.get('/', (request, response) => {
    response.send('hello homepage');
  });
  router.use(dogs());
  router.use(cats());
  return router;
};
