import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Router from 'koa-router'
import { Provider } from 'react-redux'

import { PassThrough } from 'stream'
import configureStore from 'client/store'
import App from 'client/src'

async function preload(ctx, next) {

    const htmlStream = new PassThrough()
    htmlStream.write('<!DOCTYPE html>')

    const store = configureStore({}),
        app = (
            <Provider store={store}>
                <App />
            </Provider>
        )
    console.log(store.getState())
    const appString = ReactDOMServer.renderToNodeStream(app)

    appString.pipe(htmlStream)

    ctx.body = htmlStream
    ctx.type = 'text/html'

    await next()
}

export default async function preloadMiddleware(app) {

    const router = Router({ prefix : '/'})

    router.get('*', preload)

    app.use(router.routes())
        .use(router.allowedMethods())
}