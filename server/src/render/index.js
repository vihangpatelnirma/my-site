import React from "react"
import ReactDOMServer from "react-dom/server"
import Router from "koa-router"
import { Provider } from "react-redux"

import { PassThrough } from "stream"
import configureStore from "client/store"
import App from "client/app"
import ServeHTML from "./serveHtml"
import prefetchers from "server/middlewares/prefetchers"

async function preload(ctx, next) {
	const htmlStream = new PassThrough()
	htmlStream.write("<!DOCTYPE html>")

	const store = configureStore({}),
		appString = ReactDOMServer.renderToString(
			<Provider store={store}>
				<App />
			</Provider>
		)

	const htmlComponent = <ServeHTML appString={appString} />

	const htmlString = ReactDOMServer.renderToNodeStream(htmlComponent)

	htmlString.pipe(htmlStream)

	ctx.body = htmlStream
	ctx.type = "text/html"

	await next()
}

export default async function preloadMiddleware(app) {
	const router = new Router({ prefix: "/" })

	router.get("*", prefetchers, preload)

	app.use(router.routes()).use(router.allowedMethods())
}

function mergePrefetchers(store, ctxStore) {
	return {
		...store,
		ctxStore,
	}
}
