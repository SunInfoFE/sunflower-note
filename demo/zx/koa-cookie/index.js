const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
  if (ctx.url === '/cookie') {
    ctx.cookies.set(
      'cid',
      'hello world',
      {
        domain: 'localhost',
        path: '/cookie',
        maxAge: 10 * 60 * 1000,
        expires: new Date('2018-01-30'),
        httpOnly: false,
        overwrite: false
      }
    );
    ctx.body = 'cookie is ok';
  } else {
    ctx.body = 'hello world';
  }
});

app.listen(3000, () => {
  console.log('[demo] koa-cookie is starting at port 3000');
});