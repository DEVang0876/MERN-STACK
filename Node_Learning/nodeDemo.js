var http = require('http');

var a = 10;
var b = 20;
var c = a + b;

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.write("<br/>Hello Legend");
    res.write(`<br/>A is ${a} <br/> B is ${b} <br/> C is ${c}`);
    res.end("<br/>ABCD");
}).listen(3000); 

console.log("Server started on http://127.0.0.1:3000");
