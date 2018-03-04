/* global window, __CLIENT__ */
/** Libs imports */
import React, { Component } from "react"
import { hydrate } from "react-dom"
import { Provider } from "react-redux"

/** File imports */
import configureStore from "client/store"
import App from "client/app"

const store = configureStore((__CLIENT__ && window.__INITIAL_STATE__) || {})

const AppComponent = (
	<Provider store={store}>
		<App />
	</Provider>
)

hydrate(AppComponent, document.getElementById("app"))
