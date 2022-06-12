import { Application, Router, send} from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { viewEngine, etaEngine, oakAdapter } from "https://deno.land/x/view_engine@v10.5.1c/mod.ts"

import * as controllers from "./controllers/mod.ts";
import * as middlewares from "./middlewares/mod.ts";

const app = new Application();
const protected_router = new Router();
const unprotected_router = new Router();
const rest_api = new Router();

app.use(
    viewEngine(oakAdapter, etaEngine, {
        viewRoot: "./frontend/views/",
    })
);

unprotected_router
    .post("/login", controllers.post_login)
    .get("/login", (ctx) => {
        ctx.render('login.html');
    })

protected_router
    // Route voor de "standaard pagina" (index.html)
    .get("/", (ctx) => {
        ctx.render('index.html');
    })

    .post("/register", controllers.post_register)
    .get("/logout", (ctx) => {
        ctx.cookies.delete("auth_token");
        ctx.response.redirect("/login");
    })
    .get("/admin", controllers.get_admin)

rest_api
    .get("/items/:id", controllers.restApi.getSingleItem)
    .get("/items", controllers.restApi.getAllItems)
    .put("/items/update", controllers.restApi.updatePrices)


app.use(oakCors());

app.use(unprotected_router.routes())
app.use(unprotected_router.allowedMethods());

app.use(rest_api.routes());
app.use(rest_api.allowedMethods());

app.use(middlewares.checkLogin);

app.use(protected_router.routes());
app.use(protected_router.allowedMethods());
app.use(middlewares.serveStatic);




console.log("server started at http://localhost:8080");
await app.listen({port: 8080});