import React from "react"
import ReactDOMServer from "react-dom/server"
import Router from "koa-router"
import { Provider } from "react-redux"
import { createStore } from "redux"

import { PassThrough } from "stream"
import configureStore from "client/store"
import App from "client/app"
import ServeHTML from "./serveHtml"
import prefetchers from "server/middlewares/prefetchers"

import initRoutes from "client/routes"

async function preload(ctx, next) {
	/**
	 * Configure routes before hand the store is created.
	 * Useful to determine which page's prefetcher should be called
	 */
	const reduxRouter = initRoutes({
		initialEntries: [ctx.path],
	})

	/**
	 * Determine page type to fetch state to preload the page. And then create store
	 */
	const page = createStore(reduxRouter.reducer).getState().type

	/**
	 * Configure store
	 */
	const store = configureStore({}, reduxRouter)

	const htmlStream = new PassThrough()
	htmlStream.write("<!DOCTYPE html>")

	const appString = ReactDOMServer.renderToString(
		<Provider store={store}>
			<App />
		</Provider>
	)

	const htmlComponent = (
		<ServeHTML appString={appString} initialAppState={store.getState()} />
	)

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
