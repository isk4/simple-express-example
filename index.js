const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((request, response, next) => {
  console.log(request.headers);
  response.code = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end('<html><body><h1>Express server</h1></body></html>')
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});