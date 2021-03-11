const { Client } = require("pg");

const client = new Client({
  user: "Gabor",
  host: "localhost",
  database: "jobhunter",
  password: "",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.error("connection error"));

module.exports = client;
