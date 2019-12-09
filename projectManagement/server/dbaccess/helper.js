var mongoose = require('mongoose');

var options = {
    user: 'Dass',
    pass: '123',
    auth: {
        authdb:'admin'
    }
}

mongoose.connect('127.0.0.1', 'pmtdb', 27017, options);
module.exports.Add=function(obj)
{
    console.log("add funciton is called");

    var db = mongoose.connection;
    
    //console.log('db',db);
    db.once('openUri',function(){
        console.log("connected ...");
        console.log(obj);
    })
    console.log('db',db.readyState);
}