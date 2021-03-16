import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import router from './router';

const PORT: number = 3001;

const app = new Koa();

app.use(
  cors({
    origin: 'http://localhost:4200',
  }),
);
app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
