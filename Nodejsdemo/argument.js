var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
    var queryData = url.parse(request.url, true).query;

    response.writeHead(200,{"Content-Type":"text/plain"});

    if (queryData.name){
        response.end('welcome '+ queryData.name + '\n' + queryData.emp);
    } else {
        response.end("Welcome\n");
    }
    fs.readFile('nodetesting.pdf', (err, data) => {
        response.end(data)
      })
});

server.listen(5000);


