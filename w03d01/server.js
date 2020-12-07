const express = require('express');
const morgan = require('morgan');
const port = 5678;

const server = express();

// configure the server
server.set('view engine', 'ejs');

// middleware
// server.use((request, response, next) => {
//   console.log(`request came in! ${request.method} ${request.url}`);
//   next();
// });
server.use(morgan('dev'));

// route handlers
// GET /
server.get('/', (request, response) => {
  // response.send('Almost break time');
  // console.log(__dirname);
  
  // response.sendFile(`${__dirname}/static_files/index.html`);

  const templateVars = {
    username: 'Alice',
    faveFoods: ['apples', 'bananas', 'cauliflower']
  };

  response.render('home-page', templateVars);
});

// GET /about
server.get('/about', (request, response) => {
  response.send('You have reached the about page');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
