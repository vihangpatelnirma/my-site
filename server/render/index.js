import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Router from 'koa-router'

import { PassThrough } from 'stream'
import App from 'client/src'

async function preload(ctx, next) {

    // Create a HTML stream, to send back to the browser
    const htmlStream = new PassThrough()
    // Prefix the doctype, so the browser knows to expect HTML5
    htmlStream.write('<!DOCTYPE html>')

    const app = (
        <App/>
    )

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