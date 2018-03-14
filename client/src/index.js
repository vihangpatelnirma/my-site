/** Libs imports */
import React from "react"
import { hydrate } from "react-dom"
import { Provider } from "react-redux"

/** File imports */
import configureStore from "client/store"
import App from "client/app"
import initRoutes from "client/routes"

/**
 * Configure routes before hand the store is created.
 * Useful to determine which page's prefetcher should be called
 */
const reduxRouter = initRoutes()

const store = configureStore(window.__INITIAL_STATE__ || {}, reduxRouter)

const AppComponent = (
	<Provider store={store}>
		<App />
	</Provider>
)

hydrate(AppComponent, document.getElementById("app"))
