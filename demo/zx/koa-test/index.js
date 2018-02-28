const Koa = require('koa');
const app = new Koa();

const server = async (ctx, next) => {
  let result = {
    success: true,
    data: null
  };

  if (ctx.method === 'GET') {
    if (ctx.url === '/getString.json') {
      result.data = 'this is string data';
    } else if (ctx.url === '/getNumber.json') {
      result.data = 123455;
    } else {
      result.success = false;
    }
    ctx.body = result;
  } else if (ctx.method === 'POST') {
    if (ctx.url === '/postData.json') {
      result.data = 'ok';
    } else {
      result.success = false;
    }
    ctx.body = result;
  } else {
    ctx.boy = 'hello koa';
  }
  next && next();
};

app.use(server);

module.exports = app;

app.listen(3000, () => {
  console.log('[demo] koa-test is staring at port 3000');
});