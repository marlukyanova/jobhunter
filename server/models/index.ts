import { Client } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

const db_password = process.env.DB_PASSWORD;
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const db_port = process.env.DB_PORT;

const client = new Client({
  user: `${db_user}`,
  host: 'localhost',
  database: `${db_name}`,
  password: `${db_password}`,
});

client
  .connect()
  .then(() => console.log('connected to DB'))
  .catch((err) => console.error('connection error ' + err));

export default client;
