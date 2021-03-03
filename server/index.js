const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');

const PORT = 3001;

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
})

