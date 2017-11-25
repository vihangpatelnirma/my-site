import menu from 'data/menu'
import counties from 'data/counties'
import contactInfo from 'data/contactInfo' 

export default async function prefetcher(ctx, next) {

    ctx.store = {
        app : {
            menu,
            counties,
            contactInfo
        }
    }

    await next()
}