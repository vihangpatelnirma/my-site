/** Libs imports */
import React from 'react'
import { Provider as ReduxProvider, Provider } from 'react-redux'

/** File imports */
import configureStore from 'client/store'
import App from 'client/app'

const store = configureStore( window.__INITIAL_STATE__ || {})

const BootStrapApp = (
    <Provider store={store}>

    </Provider>
)