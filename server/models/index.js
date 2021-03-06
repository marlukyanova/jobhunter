const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'JobHunter',
  password: '',
  port: 5432,
});

client
  .connect()
  .then(() => console.log('connected to DB'))
  .catch((err) => console.error('connection error'));

module.exports = client;
