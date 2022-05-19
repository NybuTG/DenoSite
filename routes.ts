import { RouterContext } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import * as postgres from "https://deno.land/x/postgres@v0.14.0/mod.ts";
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();
const url = env.DB_URL;

const pool = new postgres.Pool(url, 3, true);
const connection = await pool.connect();


export const req_login = async (ctx: RouterContext) => {
    const {value} = await ctx.request.body();
    const username = value.username;
    const password = value.password;
    
    try {
        // Create the table
        const res = await connection.queryObject`
            SELECT * FROM users
            WHERE username=${username}        
        `;
        console.log(res);
      } finally {
        // Release the connection back into the pool
        connection.release();
    }
}

export async function login_page(ctx: RouterContext) {

}