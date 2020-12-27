const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((request, response, next) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  next();
})
.get((request, response, next) => {
  response.end('Getting all leaders');
})
.post((request, response, next) => {
  response.end(`Will add: ${request.body.name}. Details: ${request.body.description}`);
})
.put((request, response, next) => {
  response.statusCode = 403;
  response.end(`Put operation not supported on /leaders`);
})
.delete((request, response, next) => {
  response.end(`Delete all leaders.`);
});

leaderRouter.route('/:leaderId')
.all((request, response, next) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  next();
})
.get((request, response, next) => {
  response.end(`Getting leader with id ${request.params.leaderId}`);
})
.post((request, response, next) => {
  response.statusCode = 403;
  response.end(`Post operation not supported on leaders/${request.params.leaderId}`);
})
.put((request, response, next) => {
  response.write(`Updating leader with id ${request.params.leaderId}\n`);
  response.end(`Will update leader ${request.body.name}. Details: ${request.body.description}`);
})
.delete((request, response, next) => {
  response.end(`Deleting leader with id ${request.params.leaderId}`);
});

module.exports = leaderRouter;