import Router from 'koa-router'

async function preload(ctx, next) {

    ctx.body = 'Server rendering is in progress'
    ctx.type = 'text/html'

    await next()
}

export default async function preloadMiddleware(app) {

    const router = Router({ prefix : '/'})

    router.get('*', preload)

    app.use(router.routes())
        .use(router.allowedMethods())
}