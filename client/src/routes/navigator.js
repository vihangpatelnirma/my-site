import { NOT_FOUND } from "redux-first-router"

import ReducerManager from "client/store/ReducerManager"
import { convertToTitleCase } from "client/utils/string"
import routeNames from "./names"

const routeKeys = Object.keys(routeNames)

const routePageInterceptor = action => {
	// intercept and derive the names of the route you want to inject.
	switch (action.type) {
		case NOT_FOUND:
			return "Error"
		default:
			return false
	}
}

const switchPage = (state, page) => ({
	page,
})

export const reducerRoutes = new ReducerManager({
	namespace: "@route",
	store: "page",
	actions: {
		...routeNames,
		SWITCH_PAGE: switchPage,
	},
	initialState: __CLIENT__
		? window.__INITIAL_STATE__.location.type
		: "@route/page/Home",
	reducer: (state, action) => {
		/**
		 * While store creation ctx.path is supplied on server,
		 * if the route does not match,
		 * connectRoutes yield routeReducer with 'NOT_FOUND' action type
		 */
		const interceptedRouteState = routePageInterceptor(action)

		/**
		 * If route is not found, return the Error string
		 */
		if (interceptedRouteState) return interceptedRouteState

		/**
		 * If action does not belong to current reducer,
		 * return
		 */
		if (action.type.indexOf("@route") === -1) {
			return state
		}

		const actionName = action.type.split("/")[2]

		/**
		 * If action is not among the keys of route,
		 * return the existing route
		 *
		 */
		return routeKeys.indexOf(actionName) > -1
			? convertToTitleCase(actionName)
			: state
	},
})
