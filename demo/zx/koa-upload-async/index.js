const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const static = require('koa-static');

const uploadFile = require('./util/upload');
const app = new Koa();
// 模板渲染中间件
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}));

// 静态资源路径
const staticPath = './static';
// 静态资源服务器中间件
app.use(static(
  path.join(__dirname, staticPath)
));

app.use(async(ctx) => {
  if (ctx.method === 'GET') {
    // 返回表单
    let title = 'upload pic async';
    await ctx.render('index', {
      title
    });
  } else if (ctx.url === '/api/picture/upload.json' && ctx.method === 'POST') {
    // 处理上传请求
    let result = {success: false};
    let serverFilePath = path.join(__dirname, 'static/image');

    // 上传事件
    result = await uploadFile(ctx, {
      fileType: 'album',
      path: serverFilePath
    });
    ctx.body = result;
  } else {
    // 其他请求显示
    ctx.body = '<h1>404o(╯□╰)o</h1>';
  }
});



app.listen(3000, () => {
  console.log('[demo] koa-upload-async is starting at prot 3000');
});