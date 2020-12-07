const express = require('express');
const port = 5678;

const server = express();

// route handlers
// GET /
server.get('/', (request, response) => {
  response.send('Almost break time');
});

// GET /about
server.get('/about', (request, response) => {
  response.send('You have reached the about page');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
