var Promise = require("bluebird");
var fsRef = require('fs');
Promise.promisifyAll(fsRef);
fileName = '/home/dass/Desktop/RBS/Test.csv';
fsRef.readFileAsync(fileName).then(function(data){
    console.log('Data read' + data);
})

fsRef.copyFile(fileName,'/home/dass/Desktop/RBS/Test2.csv',function(){
    console.log('copied');
});

