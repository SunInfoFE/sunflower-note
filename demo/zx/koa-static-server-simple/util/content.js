const path = require('path');
const fs = require('fs');

const dir = require('./dir');

const file = require('./file');

/**
 * 获取静态资源内容
 * @param {object} ctx koa上下文
 * @param {string} 静态资源绝对路径
 * @return {string} 请求获取到的本地内容
 */
async function content(ctx, fullStaticPath) {
  // 封装请求资源的完整绝对路径
  let reqPath = path.join(fullStaticPath, ctx.url);

  // 判断请求路径是否有效
  let exist = fs.existsSync(reqPath);

  // 返回请求内容，默认为空
  let content = '';

  if (!exist) {
    // 如果请求路径不存在，返回404
    content = '404 Not Found!';
  } else {
    // 判断请求地址类型
    let stat = fs.statSync(reqPath);

    if (stat.isDirectory()) {
      // 若为目录，则渲染目录内容
      content = dir(ctx.url, reqPath);
    } else {
      // 若为文件，则读取文件内容
      content = await file(reqPath);
    }
  }
  return content;
}

module.exports = content;