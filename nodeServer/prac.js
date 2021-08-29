//DB연동

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "wasd7410",
  database: "jsman",
});

connection.connect();
