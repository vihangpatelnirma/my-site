import { reducerNavigator } from "./navigator"

console.log(reducerNavigator.actionNames.HOME)

const routes = {
	[reducerNavigator.actionNames.HOME]: "/",
}

export default routes
