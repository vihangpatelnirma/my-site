import { combineReducers } from "redux"

import home from "client/home/reducer"
import navigator from "client/routes/navigator"

const initialReducer = {
	home,
	navigator,
}

const createReducer = defaultReducers =>
	combineReducers({ defaultReducers, ...initialReducer })

export default createReducer
