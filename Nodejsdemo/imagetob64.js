var fs = require('fs');

filepath = '/home/dass/Desktop/DassNodeTraining/nodejstraining/Image.png'
filepath2 = '/home/dass/Desktop/DassNodeTraining/nodejstraining/Image2.png'

function imageToBase64(file)
{
    var binaryData = fs.readFileSync(file);
    console.log(binaryData);

    var convertedData = new Buffer(binaryData).toString('base64');
    console.log(convertedData);

return convertedData;
}

function base64ToImage(base64String)
{
    binaryData = new Buffer(base64String,'base64');
    console.log(binaryData);
    fs.writeFileSync(filepath2,binaryData);
}
base64ToImage2 = imageToBase64(filepath);
base64ToImage(base64ToImage2);
