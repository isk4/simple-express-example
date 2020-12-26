const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.all('/games', (request, response, next) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  next();
});

//Games

app.get('/games', (request, response, next) => {
  response.end('<html><body><h1>Games</h1></body></html>');
});

app.post('/games', (request, response, next) => {
  response.end(`Will add: ${request.body.name}. Details: ${request.body.description}`);
});

app.put('/games', (request, response, next) => {
  response.statusCode = 403;
  response.end(`Put operation not supported on /games`);
});

app.delete('/games', (request, response, next) => {
  response.end(`Delete all games.`);
});

//GameId

app.get('/games/:gameId', (request, response, next) => {
  response.end(`<html><body><h1>Consulting dish ID ${request.params.gameId}</h1></body></html>`);
});

app.post('/games/:gameId', (request, response, next) => {
  response.statusCode = 403;
  response.end(`Post operation not supported on /games/${request.params.gameId}`);
});

app.put('/games/:gameId', (request, response, next) => {
  response.write(`Updating game with id ${request.params.gameId}\n`);
  response.end(`Will update game ${request.body.name}. Details: ${request.body.description}`);
});

app.delete('/games/:gameId', (request, response, next) => {
  response.end(`Deleting game ${request.params.gameId}.`);
});





app.use((request, response, next) => {
  response.code = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end('<html><body><h1>Express server</h1></body></html>')
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});