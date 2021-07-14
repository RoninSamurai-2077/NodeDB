const mysql = require('mysql');

// Create DB Connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: " ",
    port: "8889",
    database: 'nodedb'

});
let query = 'in'
// Connect to MySQL
let query = 'SELECT id, fruit, quantity FROM fruits where id = 4';

connection.query(query, function(err, results) { if (err) {
console.error(err);
}
console.log(results);
connection.query('UPDATE fruits SET fruit "kiwi", quantity 63 WHERE id = 4', function(err, results) {
if (err)
console.error('update error: ' + err);
    })
})