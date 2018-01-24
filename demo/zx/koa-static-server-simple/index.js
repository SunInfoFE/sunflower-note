const Koa = require('koa');
const path = require('path');
const content = require('./util/content');
const mimes = require('./util/mimes');

const app = new Koa();

// 静态资源目录
const staticPath = './static';

// 解析资源类型
function parseMime(url) {
  let extName = path.extname(url);
  extName = extName ? extName.slice(1) : 'unknown';
  return mimes[extName];
}

app.use(async(ctx) => {

  // 静态资源的绝对路径
  let fullStaticPath = path.join(__dirname, staticPath);

  //
  let _content = await content(ctx, fullStaticPath);

  //
  let _mime = parseMime(ctx.url);

  if (_mime) {
    ctx.type = _mime;
  }

  // 输出静态资源内容
  if (_mime && _mime.indexOf('image/') >= 0) {
    // 若为图片，则用node原生res，输入二进制数据
    ctx.res.writeHead(200);
    ctx.res.write(_content, 'binary');
    ctx.res.end();
  } else {
    // 其他则输出文本
    ctx.body = _content;
  }
});

app.listen(3000);
console.log('[demo] koa-static-server is starting at port 3000');