const mysql = require('mysql');


const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin',
  database: 'my_koa'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is：', results[0].solution);
});

connection.end();