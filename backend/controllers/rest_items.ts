import { Context, RouterContext } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import * as postgres from "https://deno.land/x/postgres@v0.14.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

// Set up database connection
const env = config();
const url = env.DB_URL;
const pool = new postgres.Pool(url, 3, true);
const connection = await pool.connect();

type Item = {
    id: number;
    name: string;
    type: string;
    price: number;
    price_family: number;
}

export const updatePrices = async (ctx: any) => {
    const item_id = ctx.params.id;
    const body = await ctx.request.body()
    const values = await body.value
    console.log(values);    
    // try {
    //     const res = await connection.queryObject`
    //         UPDATE prices
    //         SET price=${values["price"]}, price_family=${values["price_family"]}
    //         WHERE i_id=${item_id}
    //     `;
    // }
    // finally {
    //     connection.release()
    // }
}

export const getAllItems = async (ctx: Context) => {
    let allItems: Item[] = [];
    
    try {
        const res = await connection.queryObject`
          SELECT items.id, items.name, items.type, prices.price, prices.price_family
          FROM items
          INNER JOIN prices ON items.id=prices.i_id
        `;

        ctx.response.body = res.rows;
    }
    finally {
        connection.release()
    }
}

export const getSingleItem = async (ctx: any) => {
    try {
        const res = await connection.queryObject`
          SELECT items.id, items.name, items.type, prices.price, prices.price_family FROM items
          INNER JOIN prices ON items.id=prices.i_id
          WHERE items.id=${ctx.params.id};
        `;

        ctx.response.body = res.rows;
    }
    finally {
        connection.release()
    }
}

export const pushSale = async (ctx: any) => {
    const body = await ctx.request.body();
    const data = await body.value
    console.log(data);
    try {
        await connection.queryObject`
            INSERT INTO sales (products, price, discount, date)
            VALUES (${JSON.stringify(data.products)}, ${data.price}, ${data.discount}, ${String(new Date(Date.now())).substring(4,24)}) 
        `
    }
    finally {
        connection.release();
    }

}

export const querySales = async (ctx: any) => {
    try {
        const res: any = await connection.queryObject`
            SELECT * FROM sales
        `
        let resp = []
        
        for (let i=0; i < res.rows.length; i++) {
            const data = res.rows[i]
            resp.push({
                "id": +String(data["id"]),
                "products": JSON.parse(data.products),
                "price": +data.price,
                "discount": +data.discount,
                "date": String(data.date).substring(4, 24)
            })
        }
        ctx.response.body = resp;
    }
    finally {
        connection.release()
    }
}