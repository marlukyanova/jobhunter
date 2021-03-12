'use strict';

// Something in TS

const express = require('express');
const router = require('./router');
const cors = require('cors');
const db = require('./models');
const PORT = 3001;

const app = express();
db.sequelize.sync();

app.use(cors()).use(express.json()).use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT} 🕺💃🏽`);
});
