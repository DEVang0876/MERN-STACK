var http = require('http');

var a = 10;
var b = 20;
var c = a + b;

http.createServer((req, res) =>{
    if(req.url=="/home"){
        res.write("<h1> Home Page </h1>")
        res.end()
    }else if(req.url=="/about"){
        res.write(JSON.stringify({'flag':1, "msg":'Record Added'}))
        res.end()
    }else{
        res.write("<h1>🔥Welcomttťttttt</h1>")
        //res.write(`<br/>A is ${a} <br/> B is ${b} <br/> C is ${c}`);
        res.end()
    }
}).listen(3000); 

console.log("Server started on http://127.0.0.1:3000");