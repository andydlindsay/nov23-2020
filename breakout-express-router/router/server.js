require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const productRouter = require('./routes/product-router');
const postsRouter = require('./routes/post-router');
const dbConnection = require('./db/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev')); // (req, res, next) => {}
app.use('/api/products', productRouter);
app.use('/api/posts', postsRouter(dbConnection));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
