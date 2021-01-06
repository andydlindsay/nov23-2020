require('dotenv').config();

const express = require('express');
const villainRouter = require('./routes/villain-router');

const app = express();
const port = process.env.PORT || 7865;

app.use('/villains', villainRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
