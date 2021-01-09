const express = require('express');
const router = express.Router();

const routingFunction = (db) => {

  // GET /api/posts/
  router.get('/', (req, res) => {
    db.query('SELECT * FROM posts')
      .then(result => {
        res.json(result.rows);
      })
  });

  // GET /api/posts/:id
  router.get('/:id', (req, res) => {
    db.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
      .then(result => {
        if (result.rows.length) {
          return res.json(result.rows[0]);
        }
        res.json({ message: 'no resources found' });
      });
  });

  return router;

};

module.exports = routingFunction;
