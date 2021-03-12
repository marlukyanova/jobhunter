const { Client } = require('pg');
const dotenv = require("dotenv")
dotenv.config()

const db_password = process.env.DB_PASSWORD;

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'JobHunter',
  password: `${db_password}`,
  port: 5000,
});

client
  .connect()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.error("connection error", err));

module.exports = client;
