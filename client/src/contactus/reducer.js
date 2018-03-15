import ReducerManager from "client/store/ReducerManager"

const initApp = (state, payload) => ({
	...state,
	name: payload.name,
})

export const reducerContactUs = new ReducerManager({
	namespace: "contactus",
	store: "contactus",
	initialState: __CLIENT__ ? window.__INITIAL_STATE__.contactus : {},
	actions: {
		INIT_APP: initApp,
	},
})
