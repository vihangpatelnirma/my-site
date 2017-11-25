import Router from 'koa-router'

export default function(app) {
    
    const router = new Router({ prefix : '/api'})

    app.use(router.routes())
        .use(router.allowedMethods())
}