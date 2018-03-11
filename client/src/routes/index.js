import actionNameMap from "./actions"
import { connectRoutes } from "redux-first-router"
import nameMap from "./names"

/**
 * Connect routes using simuilated history and routesMap
 */
const initRoutes = (pathArray = {}) =>
	connectRoutes(actionNameMap, {
		...names,
		initialEntries: pathArray.initialEntries,
	})

export default initRoutes
