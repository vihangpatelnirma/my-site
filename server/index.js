import koa from "koa"
import env from '../config'
import router from 'server/middlewares/router'

const app = new koa()

router(app)

app.listen(env.PORT, () => {
  console.log(`server is up and running on port ${env.PORT}`);
});