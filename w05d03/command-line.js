// const { Client, Pool } = require('pg');
const pg = require('pg');

const Client = pg.Client;

const configObj = {
  user: 'tmaoyncr',
  host: 'suleiman.db.elephantsql.com',
  database: 'tmaoyncr',
  password: 'XgFDh80JRfztYGaMVEZgi3NwuCRNiA8K',
  port: 5432
};

const client = new Client(configObj);

client.connect();

const verb = process.argv[2];
let id;

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'read':
    id = process.argv[3];
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'edit':
    id = process.argv[3];
    const newName = process.argv[4];
    client.query('UPDATE movie_villains SET villain = $1 WHERE id = $2;', [newName, id])
      .then(() => {
        console.log('villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const villainName = process.argv[3];
    const villainMovie = process.argv[4];
    client.query('INSERT INTO movie_villains(villain, movie) VALUES($1, $2);', [villainName, villainMovie])
      .then(() => {
        console.log('villain does harm');
        client.end();
      });
    break;

  case 'delete':
    id = process.argv[3];
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('villain no longer carries out nefarious activities on a consistent basis');
        client.end();
      });
    break;

  default:
    console.log('please enter a proper verb');
    client.end();
}
