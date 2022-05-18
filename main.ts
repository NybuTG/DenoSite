import { Item } from "./Item.ts";
import { parse } from 'https://deno.land/std@0.82.0/encoding/csv.ts';

// let plant: Item = {
//     id: 1,
//     name: "sla",
//     type: "plant",
//     price: 0.0,
//     price_family: 0.0
// };

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

console.log(items[0]);