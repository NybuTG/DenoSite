export const get_login = (ctx: any) => {
    ctx.response.type = "html";
    ctx.render('login.ejs',{company_name: "Kweektafel"});
}