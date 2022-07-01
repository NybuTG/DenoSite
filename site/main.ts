import { Application, Router, send} from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { viewEngine, etaEngine, oakAdapter } from "https://deno.land/x/view_engine@v10.5.1c/mod.ts"
import { proxy } from "https://deno.land/x/oak_http_proxy@2.0.1/mod.ts";
import * as controllers from "./controllers/mod.ts";
import * as middlewares from "./middlewares/mod.ts";

const app = new Application();
const protected_router = new Router();
const unprotected_router = new Router();
const rest_api = new Router();

app.use(
    viewEngine(oakAdapter, etaEngine, {
        viewRoot: "./public",
    })
);

unprotected_router
    .post("/check_login", controllers.post_login)
    .get("/login", (ctx) => {
        ctx.render("login.html")
    })
    .put("/push_sale", controllers.restApi.pushSale)

protected_router
    .get("/", (ctx) => {
        ctx.response.redirect("/cash_register")
    })
    .post("/register", controllers.post_register)
    .get("/uitloggen", (ctx) => {
        ctx.cookies.delete("auth_token");
        ctx.response.redirect("/login");
    })
    .get("/admin", controllers.get_admin)
    .get("/cash_register", (ctx) => {
        ctx.render("cash_register.html")
    })
    .get("/stats", (ctx) => {
        ctx.render("stats.html")
    })

rest_api
    .get("/items/sales", controllers.restApi.querySales)
    
    .get("/items/:id", controllers.restApi.getSingleItem)
    .get("/items", controllers.restApi.getAllItems)
    .put("/items/update", controllers.restApi.updatePrices)
    


app.use(oakCors());

app.use(middlewares.serveStatic);
app.use(unprotected_router.routes())
app.use(unprotected_router.allowedMethods());

app.use(rest_api.routes());
app.use(rest_api.allowedMethods());

app.use(middlewares.checkLogin);

app.use(protected_router.routes());
app.use(protected_router.allowedMethods());

console.log("server started at http://localhost:8080");
await app.listen({port: 1923});
