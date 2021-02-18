const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'test',
  database: 'ice_creamDB',
});
connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(`CONNECTED AS ID ${connection.threadId}`);
  connection.end();
});

function afterConnection() {
    connection.query('SELECT * FROM roduct'), function (err, res) {
        if (err) throw err;

        res.map(iceCream => console.log('The flavor is ${iceCream.flavor}`)

    }
};