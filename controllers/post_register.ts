import { RouterContext } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import * as postgres from "https://deno.land/x/postgres@v0.14.0/mod.ts";
import { config } from 'https://deno.land/x/dotenv/mod.ts';

// Set up database connection
const env = config();
const url = env.DB_URL;
const pool = new postgres.Pool(url, 3, true);
const connection = await pool.connect();


export const post_register = async (ctx: any) => {
    const {value} = await ctx.request.body();
    const username = value.username;

    // Check if user doesnt exist already in database
    const res = await connection.queryObject`
        SELECT * FROM users
        WHERE username=${username}
    `;
    console.log(res);
    // If user exists, skip to end

    // If user doesn't exist, create entry in database

    // Return status, i.e. failed or succesful
}