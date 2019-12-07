// Nodejs encryption with CTR
var stringify = require('json-stringify');
var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var password = 'd6F3Efeq';

function encrypt(text){
    var cipher = crypto.createCipher(algorithm,password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text){
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}

obj={
    id:357698,
    name:"Anoop"
}

var encryptedText = encrypt(stringify(obj));
console.log(encryptedText);

console.log(decrypt(encryptedText));