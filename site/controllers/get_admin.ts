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

export const get_admin = async (ctx: any) => {
    const token = await ctx.cookies.get("auth_token");
    try {
        const payload: Payload = await verify(token, key)
        if (payload.aud?.includes("admin")) {
            console.log("User is admin");
            ctx.response.type = "html";
            ctx.render('admin.html');
        } else {
            ctx.response.redirect("/");
        }
    } catch(_) {
        ctx.cookies.delete("auth_token");
        ctx.reponse.redirect("/");
    }
}