import actionNameMap from "./actions"
import { connectRoutes } from "redux-first-router"
import nameMap from "./names"

/**
 * Connect routes using simuilated history and routesMap
 */
const initRoutes = (pathArray = {}) =>
	connectRoutes(actionNameMap, {
		...nameMap,
		initialEntries: pathArray.initialEntries,
	})

export default initRoutes
