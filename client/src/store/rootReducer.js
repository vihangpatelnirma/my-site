import { combineReducers } from "redux"

import { reducerHome } from "client/modules/home/reducer"
import { reducerEnroll } from "client/modules/enroll/reducer"
import { reducerNavigator } from "client/routes/navigator"

const initialReducer = {
	[reducerHome.storeName]: reducerHome.reducer,
	[reducerNavigator.storeName]: reducerNavigator.reducer,
	[reducerEnroll.storeName]: reducerEnroll.reducer,
}

const createReducer = defaultReducers =>
	combineReducers({ ...defaultReducers, ...initialReducer })

export default createReducer
