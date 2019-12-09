var express = require('express')
var fs = require('fs')
var https = require('https')
var url = require('url');


var server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: 'dass'
  },function(request, response){
    var queryData = url.parse(request.url, true).query;

    response.writeHead(200,{"Content-Type":"text/plain"});

    if (queryData.name){
        response.end('welcome '+ queryData.name + '\n' + queryData.emp);
    } else {
        response.end("Welcome\n");
    }
    response.end("Welcome\n");
});

server.listen(5000,()=> console.log("server is running!!"));


