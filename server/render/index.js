import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Router from 'koa-router'

import { PassThrough } from 'stream'

import App from 'client/src'

async function preload(ctx, next) {

    const htmlStream = new PassThrough()
    htmlStream.write('<!DOCTYPE html>')

    const appString = ReactDOMServer.renderToNodeStream(<App/>)

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