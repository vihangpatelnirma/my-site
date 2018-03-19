import koa from "koa"
import env from "../config"
import mount from "koa-mount"
import serve from "koa-static"
import path from "path"

import config from "config"

import router from "server/middlewares/router"

const app = new koa()

app.use(
	mount("/chunks", serve(config.PUBLIC_PATH), {
		maxage: 24 * 60 * 60 * 100,
	})
)

router(app)

console.log("process port : ", process.env.PORT)

app.listen(process.env.PORT, () => {
	console.log(`server is up and running on port ${process.env.PORT}`)
})
