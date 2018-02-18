/** Libs imports */
import React from "react"
import { hydrate } from "react-dom"
import { Provider } from "react-redux"

/** File imports */
import configureStore from "client/store"
import App from "client/app"

const store = configureStore(window.__INITIAL_STATE__ || {})

const AppComponent = (
	<Provider store={store}>
		<App />
	</Provider>
)

hydrate(AppComponent, document.getElementById("app"))
