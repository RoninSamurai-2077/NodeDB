const mysql = require('mysql');

// Create DB Connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ' ',
    port: '3306',
    database: 'nodedb'
});

// Connect to MySQL
con.connect(function(err) {

let query = 'INSERT INTO fruits (fruit, quantity) VALUES ("banana", 2)';
connection.query(query, function(err, results) {
if (err) {
    console.error(err);
}

console.log('inserted a record');
});

connection.end(); 
})