var mysql = require('mysql');

var DB_NAME = 'nodeDB'
var sql = 'CREATE DATABASE IF NOT EXISTS ?';
var inserts = [DB_NAME];

// Create DB Connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: " ",
    port: "3000"
});

// Connect to MySQL
con.connect(function(err) {
    console.log("DB_NAME: " + DB_NAME);
console.log("SQL: " + sql);

    if (err) throw err;
    console.log("Connected to the Database");
    con.query(sql, inserts, function(err, result){
        if (err) throw err;
    console.log("Database created");
    con.database = DB_NAME
    console.log("Database: " + con.database);
    });
});