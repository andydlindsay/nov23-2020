const http = require('http');
const port = 3456;

const server = http.createServer((request, response) => {
  const route = `${request.method} ${request.url}`;
  
  switch (route) {
    case 'GET /':
      response.end('you have made a GET request to the home page /');
      break;
    case 'GET /about':
      response.end('you have made a GET request to the about page');
      break;
    default:
      response.end('resource not found');
  }
  // response.write('Happy Monday!');
  // response.end(); // send back the response

  // response.end('Still Happy Monday!');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
