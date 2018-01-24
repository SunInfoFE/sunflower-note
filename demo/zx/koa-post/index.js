const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    ctx.body = `
      <h1>koa2 request post demo</h1>
      <form action="/" method="POST">
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
    ctx.body = await parsePostData(ctx);
  } else {
    ctx.body = '<h1>404!!!o(╯□╰)o</h1>';
  }
});

//
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = '';
      ctx.req.addListener('data', (data) => {
        postdata += data;
      });
      ctx.req.addListener('end', function() {
        let parseData = parseQueryStr(postdata);
        resolve(parseData);
      });
    } catch(err) {
      reject(err);
    }
  });
}

function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split('&');
  console.log(queryStrList);
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=');
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}

app.listen(3000, () => {
  console.log('[demo] request post is starting at port 3000');
});