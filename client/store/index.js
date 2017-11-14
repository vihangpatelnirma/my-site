/**
 * Node module imports
 */
import { createStore, applyMiddleware, compose } from 'redux'


/**
 * File imports
 */
import rootReducer from './RootReducer'

/**
 * This function creates a redux store
 *
 * @param  {object} history Browser history object
 * @param  {object} state   Redux state
 * @return {Store}         Returns a redux store
 */
export default function(state = {}){

    let composeStore


    const store = createStore(
        rootReducer,
        state
    )

    return store
}
