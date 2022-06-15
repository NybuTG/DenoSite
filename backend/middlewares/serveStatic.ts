export const serveStatic = async (ctx: any, next: any) => {
    // console.log(ctx.request.url.pathname);
    if (String(ctx.request.url.pathname).includes("_next")) {
        await ctx.send(
            {
                root: `${Deno.cwd()}/public/`,
                path: ctx.request.url.pathname,
            }
        )   
    }

    await next();
}