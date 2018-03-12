import { combineReducers } from "redux"

import { reducerHome } from "client/home/reducer"
import { reducerNavigator } from "client/routes/navigator"

const initialReducer = {
	[reducerHome.storeName]: reducerHome.reducer,
	[reducerNavigator.storeName]: reducerNavigator.reducer,
}

const createReducer = defaultReducers =>
	combineReducers({ ...defaultReducers, ...initialReducer })

export default createReducer
