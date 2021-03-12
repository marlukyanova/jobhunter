import express, { Application } from 'express';
import cors from 'cors';
import { db } from './models';
import { Sequelize } from 'sequelize/types';
const router = require('./router');

const PORT = 3001;

db.sequelize
  .authenticate()
  .then(() => console.log('Connected to database'))
  .catch((err) => {
    throw `Error: ${err}`;
  });

const app: Application = express();

db.sequelize.sync();

app.use(cors()).use(express.json()).use(router);
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🍆`));

