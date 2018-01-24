const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(async(ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    ctx.body = `
      <h1>koa request post demo, with koa-bodyparser</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `;
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
  } else {
    ctx.body = '<h1>404!!!o(╯□╰)o</h1>';
  }
});

app.listen(3000, () => {
  console.log('[demo] request post is starting at port 3000');
});