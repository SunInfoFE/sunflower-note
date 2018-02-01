const mysql = require('mysql');

// 创建数据池
const pool = mysql.createPool({
  host        : '127.0.0.1',
  user        : 'root',
  password    : 'admin',
  database    : 'my_koa'
});

// 在数据池中进行会话操作
pool.getConnection(function(err, connection) {
  connection.query('SELECT * FROM demo', (error, results, fields) => {
    console.log('数据池连接成功');
    // 结束会话
    connection.release();

    // 如果有错误就抛出
    if (error) throw error;
  });
});