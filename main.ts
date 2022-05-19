import { Application, Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { render } from "https://cdn.skypack.dev/preact-render-to-string@v5.1.12";
import { HomePage, AdminPage } from "./www/frontend.ts";
import {post_register} from "./controllers/mod.ts"

const app = new Application();
const router = new Router();

router
    // Route voor de "standaard pagina" (index.html)
    .get("/", (ctx) => {
        ctx.response.type = "html";
        ctx.response.body = render(HomePage(), {}, {pretty: true});
    })
    .post("/register", post_register);


app.use(router.routes());
app.use(router.allowedMethods());

console.log("server started at http://localhost:8080");
await app.listen({port: 8080});