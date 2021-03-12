const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./router");

const PORT = 3001;

const app = new Koa();

app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);
app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
