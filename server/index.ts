import express, { Application } from 'express';
import cors from 'cors';
import { db } from './models';
const router = require('./router');

const PORT = 3001;

db.sequelize
  .authenticate()
  .then(() => console.log('connected to db'))
  .catch((err) => {
    throw `Error: ${err}`;
  });

const app: Application = express();

app.use(cors()).use(express.json()).use(router);
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
