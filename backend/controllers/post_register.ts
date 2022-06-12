import * as postgres from "https://deno.land/x/postgres@v0.14.0/mod.ts";
import * as bcrypt from 'https://deno.land/x/bcrypt@v0.3.0/mod.ts';
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { Status } from "https://deno.land/x/oak@v10.5.1/mod.ts";
// Set up database connection
const env = config();
const url = env.DB_URL;
const pool = new postgres.Pool(url, 3, true);
const connection = await pool.connect();

export const post_register = async (ctx: any) => {
    const body = (await ctx.request.body())
    let data = await body.value.read()
    data = data.fields
    const username = data.username;
    try {
        // Check if user doesnt exist already in database
        const res = await connection.queryObject`
            SELECT username FROM users
            WHERE username=${username}
        `;
        if (res.rowCount == 0) {
            
            try {
                const hash = await bcrypt.hash(data.password);
                console.log(`Creating user "${username}" with password hash ${hash}`);
                await connection.queryObject`
                  INSERT INTO users (username, password_hash)
                  VALUES (${username}, ${hash})  
                `;
            }
            finally {
                connection.release()
            }

            ctx.response.body = "User Creation Success";
        } else {
            ctx.response.status = Status.Conflict;
            ctx.response.body = "ERROR: User Exists";
        }
    }

    finally {
        connection.release();
    }
    // If user exists, skip to end

    

    // Return status, i.e. failed or succesful
}