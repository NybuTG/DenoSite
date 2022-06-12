export const serveStatic = async (ctx: any, next: any) => {
    await ctx.send(
        {
            root: `${Deno.cwd()}/frontend/static`,
            path: ctx.request.url.pathname,
        }
    )   
    await next();
}