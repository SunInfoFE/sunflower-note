const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const Router = require('koa-router')();

app.use(bodyParser());
app.use(session({
  key: 'session-id',
  cookie: {
    domain: 'localhost',
    path: '/',
    maxAge: 1000 * 30,
    httpOnly: true,
    overwrite: false
  }
}));
// 使用 Map 模拟数据库
const users = new Map([['laowang', {username: 'laowang', password: '123456'}]]);
const tips = `
  GET     /查看登录信息
  POST    / {username: laowang; password: 123456} 发此请求以登录
  DELETE  / 注销
`;

Router.get('/', ctx => {
  console.log(ctx.session);
  if (ctx.session.user) {
    ctx.body = {
      status: '您已登录',
      session: ctx.session.user
    };
  } else {
    ctx.body = tips;
  }
});

Router.post('/', ctx => {
  const {username, password} = ctx.request.body;
  if (ctx.session.user) {
    ctx.body = `${ctx.session.user.username} 已登录，请勿重复登录`;
  } else if (users.has(username)) {
    const user = users.get(username);
    if (username === user.username && password === user.password) {
      ctx.session.user = {
        username,
        password
      };
      ctx.body = '登录成功，请访问 GET / 查看session中的信息';
    } else {
      ctx.body = '用户名或密码不正确';
    }
  } else {
    ctx.body = '用户不存在';
  }
});

Router.del('/', ctx => {
  ctx.session = null;
  ctx.body = '您已注销';
});

Router.get('/*', ctx => {
  ctx.body = tips;
});

app.use(Router.routes());

app.listen(3000, () => {
  console.log('[demo] koa-session is starging at port 3000');
});