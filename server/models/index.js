const { Client } = require("pg");

const client = new Client({
<<<<<<< HEAD
  user: 'JD',
  host: 'localhost',
  database: 'jobhunter',
  password: '',
=======
  user: "Gabor",
  host: "localhost",
  database: "jobhunter",
  password: "",
>>>>>>> refs/remotes/origin/development
  port: 5432,
});

client
  .connect()
<<<<<<< HEAD
  .then(() => console.log('connected to DB'))
  .catch((err) => console.error('connection error ' + err));
=======
  .then(() => console.log("connected to DB"))
  .catch((err) => console.error("connection error", err));
>>>>>>> refs/remotes/origin/development

module.exports = client;
