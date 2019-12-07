var httpref = require('http');

var server = httpref.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("http node started to listern");
})

server.listen(5000);
console.log("working");

