import ReducerManager from "client/store/ReducerManager"

const initApp = (state, payload) => ({
	...state,
	name: payload.name,
})

export const reducerHome = new ReducerManager({
	namespace: "home",
	store: "home",
	initialState: __CLIENT__ ? window.__INITIAL_STATE__.home : {},
	actions: {
		INIT_APP: initApp,
	},
})
