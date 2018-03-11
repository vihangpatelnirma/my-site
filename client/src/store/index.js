import { createStore, applyMiddleware, compose } from "redux"

import createReducer from "./rootReducer"

export default function configureStore(initialState = {}, reduxRouter) {
	/**
	 * Apply middleware from routes
	 */
	const middlewares = applyMiddleware(reduxRouter.middleware)

	/**
	 * Configure store using above middlewares
	 */
	let composeFunc
	if (__DEV__) {
		composeFunc = compose(
			reduxRouter.enhancer,
			middlewares,
			typeof window === "object" &&
			typeof window.devToolsExtension !== "undefined"
				? window.devToolsExtension()
				: f => f
		)
	} else {
		composeFunc = compose(reduxRouter.enhancer, middlewares)
	}

	const store = createStore(
		createReducer({
			location: reduxRouter.reducer,
		}),
		initialState,
		composeFunc
	)

	return store
}
