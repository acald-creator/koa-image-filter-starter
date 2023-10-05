import Koa from "koa";
import Logger from "koa-logger";
import bodyParser from "@koa/bodyparser";
import { routes } from "./routes";

(async () => {
    const app = new Koa;

    const port = process.env.PORT || 4000;

    app.use(bodyParser());

    app.use(Logger())
        .use(routes.routes())
        .use(routes.allowedMethods());

    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`)
        console.log(`press CTRL+C to stop server`)
    });
})();