var http=require('http')
var a=10
var b=20
var c=a+b

http.createServer(function(req,res){
    res.write("Hello Legend")
    res.write(`A is ${a}<br/> B is ${b} <br/> C ic ${c} `)
    res.end("ABCD")
})

console.log ("Server started on http://127.0.0.1:7777")