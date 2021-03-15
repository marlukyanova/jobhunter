const { Client } = require("pg");

const client = new Client({
  user: "JD",
  host: "localhost",
  database: "jobhunter",
  password: "",
});

client
  .connect()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.error("connection error " + err));

module.exports = client;
