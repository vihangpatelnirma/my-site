export default async function prefetcher(ctx, next) {

    ctx.store = {
        data : 'Init Data'
    }

    await next()
}