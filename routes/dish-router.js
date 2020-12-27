const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((request, response, next) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  next();
})
.get((request, response, next) => {
  response.end('Getting all dishes');
})
.post((request, response, next) => {
  response.end(`Will add: ${request.body.name}. Details: ${request.body.description}`);
})
.put((request, response, next) => {
  response.statusCode = 403;
  response.end(`Put operation not supported on /dishes`);
})
.delete((request, response, next) => {
  response.end(`Delete all games.`);
});

dishRouter.route('/:dishId')
.all((request, response, next) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  next();
})
.get((request, response, next) => {
  response.end(`Getting dish with id ${request.params.dishId}`);
})
.post((request, response, next) => {
  response.statusCode = 403;
  response.end(`Post operation not supported on dishes/${request.params.dishId}`);
})
.put((request, response, next) => {
  response.write(`Updating dish with id ${request.params.dishId}\n`);
  response.end(`Will update dish ${request.body.name}. Details: ${request.body.description}`);
})
.delete((request, response, next) => {
  response.end(`Deleting dish ${request.params.dishId}.`);
});

module.exports = dishRouter;