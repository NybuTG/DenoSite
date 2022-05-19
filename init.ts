import { Item } from "./Item.ts";
import { parse } from 'https://deno.land/std@0.82.0/encoding/csv.ts';
import * as postgres from "https://deno.land/x/postgres@v0.14.0/mod.ts";
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();
const url = env.DB_URL;

const items: Item[] = new Array();

await parse(await Deno.readTextFile('./data/products.csv'), {
    skipFirstRow: true,
    parse: (i: any) => {
        items.push({
            id: +i.id,
            name: i.name,
            type: i.type,
            price: 0.0,
            price_family: 0.0,
        })
    },
});

const pool = new postgres.Pool(url, 3, true);
const connection = await pool.connect();

async function insertItem(item: Item) {
    try {
        // Create the table
        await connection.queryObject`
            INSERT INTO items
            VALUES (${item.id}, ${item.name}, ${item.type})
        `;
      } finally {
        // Release the connection back into the pool
        connection.release();
    }
}

items.forEach(insertItem);