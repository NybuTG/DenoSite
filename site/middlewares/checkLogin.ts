import { create, verify, getNumericDate, Payload, Header, decode} from "https://deno.land/x/djwt@v2.4/mod.ts";
import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { Context } from 'https://deno.land/x/oak@v10.5.1/mod.ts';

const env = config();
const encoder = new TextEncoder();
const decoder = new TextDecoder();

const keyBuf = encoder.encode(env.JWT_SECRET);

const key = await crypto.subtle.importKey(
    "raw",
    keyBuf,
    {name: "HMAC", hash: "SHA-256"},
    true,
    ["sign", "verify"],
)

export const checkLogin = async (ctx: Context, next: any) => {
    if (!String(ctx.request.url.pathname).includes("_next")) {
        const token = await ctx.cookies.get("auth_token");
        if (token) {
            try {
                await verify(token, key);
                await next();
            } catch (_) {
                // Generate JWT cookie
                const payload: Payload = {
                    name: username,
                    iss: "Kweektafel",
                    exp: getNumericDate(300),
                    aud: ["admin"],
                }

                const jwt = await create(header, payload, key);
                await ctx.cookies.set("auth_token", jwt);
                ctx.cookies.delete("auth_token");
                ctx.response.redirect("/login");  
            }
            
        } else {
            ctx.response.redirect("/login");
        }
    }
}
