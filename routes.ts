import Router from "koa-router"

const routes = new Router();

routes.get("/", (ctx, next) => {
    ctx.body = 'Try GET /filteredimage?image_url={{}}'
});

export { routes };