const express = require('express');
const bodyParser = require('body-parser');

const gameRouter = express.Router();
gameRouter.use(bodyParser.json());

gameRouter.route('/')
.all((request, response, next) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  next();
})
.get((request, response, next) => {
  response.end('<html><body><h1>Games</h1></body></html>');
})
.post((request, response, next) => {
  response.end(`Will add: ${request.body.name}. Details: ${request.body.description}`);
})
.put((request, response, next) => {
  response.statusCode = 403;
  response.end(`Put operation not supported on /games`);
})
.delete((request, response, next) => {
  response.end(`Delete all games.`);
});

module.exports = gameRouter;