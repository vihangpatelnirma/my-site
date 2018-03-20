import { reducerNavigator } from "./navigator"

const routes = {
	[reducerNavigator.actionNames.HOME]: "/",
	[reducerNavigator.actionNames.ENROLL]: "/enroll",
	[reducerNavigator.actionNames.COURSES]: "/courses",
	[reducerNavigator.actionNames.BLOG]: "/blog",
	[reducerNavigator.actionNames.TEAM]: "/team",
}

export default routes
