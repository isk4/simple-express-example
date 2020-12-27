const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((request, response, next) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  next();
})
.get((request, response, next) => {
  response.end('Getting all promotions');
})
.post((request, response, next) => {
  response.end(`Will add: ${request.body.name}. Details: ${request.body.description}`);
})
.put((request, response, next) => {
  response.statusCode = 403;
  response.end(`Put operation not supported on /promotions`);
})
.delete((request, response, next) => {
  response.end(`Delete all promotions.`);
});

promoRouter.route('/:promoId')
.all((request, response, next) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  next();
})
.get((request, response, next) => {
  response.end(`Getting promotion with id ${request.params.promoId}`);
})
.post((request, response, next) => {
  response.statusCode = 403;
  response.end(`Post operation not supported on promotions/${request.params.promoId}`);
})
.put((request, response, next) => {
  response.write(`Updating promotion with id ${request.params.promoId}\n`);
  response.end(`Will update promotion ${request.body.name}. Details: ${request.body.description}`);
})
.delete((request, response, next) => {
  response.end(`Deleting promotion with id ${request.params.promoId}`);
});

module.exports = promoRouter;