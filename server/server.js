
const http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "https://sqliteonline.com/#sharedb=s%3Alonzo",
    user: "root",
    password: "Rolan1432",
    database: "little-lemon.db"
});
let data;
con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM Reservatio", function (err, result, fields) {
        if (err) throw err;
        data = result ;
    });
});
const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });


    res.write(data);
    res.end();
});


const port = 3000;


server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});