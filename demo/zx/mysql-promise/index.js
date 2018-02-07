const mysql = require('mysql');
const pool = mysql.createPool({
  host      : '127.0.0.1',
  user      : 'root',
  password  : 'admin',
  database  : 'my_koa'
});

let query = function(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

async function selectAllData() {
  let sql = 'SELECT * FROM demo';
  return await query(sql);
}

async function getData() {
  let dataList = await selectAllData();
  console.log(dataList);
}

getData();