export default class ReducerPackager {
	constructor(props = {}) {
		this.props = props

		/**
		 * Store name to use in combined reducer
		 */
		this.storeName = props.store

		this.prefixNamespace()
		this.getReducer()
	}

	prefixNamespace() {
		const { props } = this
		const newActions = {}
		const newActionNames = {}
		const actions = {}
		const actionTypes = []

		for (const action in props.actions) {
			if (action) {
				let keyName = ""
				keyName = `${props.namespace || ""}/${props.store ||
					""}/${action}`

				newActions[keyName] = props.actions[action]
				newActionNames[action] = keyName

				/**
				 * Make list of actions available in current class
				 * This is to avoid iterating over switch case available
				 */
				actionTypes.push(keyName)

				/* eslint-disable no-loop-func */
				actions[action] = payload => ({
					type: keyName,
					...payload,
				})
				/* eslint-enable no-loop-func */
			}
		}

		this.props.actions = newActions
		this.actions = actions
		this._actionTypes = actionTypes
		this.actionNames = newActionNames
	}

	getReducer() {
		const { props, _actionTypes } = this
		const { initialState } = props

		this.reducer = (state = initialState, action) => {
			// if action not found, return existing state,
			// If action exists, check whether its in list of current reducers action
			if (!action || _actionTypes.indexOf(action.type) === -1) {
				return state
			}

			/**
			 * If reducer is already supplied in constructor, return provided reducer
			 */
			if (this.props.reducer) {
				return this.props.reducer(state, action)
			}

			return props.actions[action.type](state, action)
		}
	}
}
