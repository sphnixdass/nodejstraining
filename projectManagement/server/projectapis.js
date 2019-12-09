var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var dao = require('./dbaccess/helper')

var app = express();

app.use(cors())

app.use(bodyParser.json())

app.get("/",function(req, res){

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header("Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type");
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.end("Ready to work with APIS");

});

app.post("/addProject",function(req, res){

 // Website you wish to allow to connect
 res.setHeader('Access-Control-Allow-Origin', '*');
 // Request methods you wish to allow
 res.setHeader('Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 // Request headers you wish to allow
 // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 res.header("Access-Control-Allow-Headers",
     "X-Requested-With, Content-Type");
 // Set to true if you need the website to include cookies in the requests sent
 // to the API (e.g. in case you use sessions)
 res.setHeader('Access-Control-Allow-Credentials', true);

 console.log(req.body);
 //console.log(res.body);
 dao.Add(req.body);
    res.end("record added");

});

http.createServer(app).listen(5000);



