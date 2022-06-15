import * as postgres from "https://deno.land/x/postgres@v0.15.0/mod.ts";
import * as bcrypt from 'https://deno.land/x/bcrypt@v0.3.0/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { Status } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { create, verify , getNumericDate, Payload, Header} from "https://deno.land/x/djwt@v2.4/mod.ts";
// import { cryptoRandomString } from "https://deno.land/x/crypto_random_string@1.0.0/mod.ts";

const env = config();
const encoder = new TextEncoder();

const keyBuf = encoder.encode(env.JWT_SECRET);

const key = await crypto.subtle.importKey(
    "raw",
    keyBuf,
    {name: "HMAC", hash: "SHA-256"},
    true,
    ["sign", "verify"],
)

// Set up database connection

const url = env.DB_URL;
const pool = new postgres.Pool(url, 3, true);
const connection = await pool.connect();

const algorithm = "HS256"
const header: Header = {
    alg: algorithm,
    typ: "JWT",
};

export const post_login = async (ctx: any) => {
    const body = await ctx.request.body()
    const data = await body.value
    const username = data.username;
    const password = data.password

    try {
        // Check if user exists in database and fetch password immediatly as well
        const res = await connection.queryObject`
            SELECT * FROM users
            WHERE username=${username}
        `;
        if (res.rowCount == 1) {
            const account: any = res.rows[0];
            const hash = account.password_hash;
            const correct_password = await bcrypt.compare(password, hash);
            if (correct_password) {
                // Generate JWT cookie
                const payload: Payload = {
                    name: username,
                    iss: "Kweektafel",
                    exp: getNumericDate(300),
                    aud: ["admin"],
                }

                const jwt = await create(header, payload, key);
                await ctx.cookies.set("auth_token", jwt);
                ctx.response.redirect("/cash_register");
            }
            
            else {
                ctx.response.headers.set("Content-Type", "application/json");
                ctx.response.status = Status.Unauthorized
                ctx.response.body = {
                    status: "Wachtwoord klopt niet"
                };
            }

        } else {
            ctx.response.headers.set("Content-Type", "application/json");
            ctx.response.status = Status.Unauthorized;
            ctx.response.body = {
                status: "Account niet gevonden"
            };
        }
    }

    finally {
        connection.release();
    }
}
