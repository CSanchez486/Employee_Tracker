// connects js to mysql - referenced: https://www.w3schools.com/nodejs/nodejs_mysql.asp

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "e_tracker_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;