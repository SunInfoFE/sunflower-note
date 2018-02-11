const path = require('path');
const Koa = require('koa');
const render = require('koa-ejs');

const app = new Koa();

render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
});

app.use(function(ctx, next) {
  ctx.state = ctx.state || {};
  ctx.state.now = new Date();
  ctx.state.ip = ctx.ip;
  return next();
});

app.use(async function(ctx) {
  const users = [{name: 'aaa'}, {name: 'bbb'}, {name: 'ccc'}];
  await ctx.render('content', {
    users
  });
});

if (process.env.NODE_ENV === 'test') {
  module.exports = app.callback();
} else {
  app.listen(3000, () => {
    console.log('[demo] koa-ejs is starting at port 3000');
  });
}

app.on('error', function(err) {
  console.log(err.stack);
});