var fs = require('fs');
var pdfreader = require("pdfreader");

filepath = '/home/dass/Desktop/DassNodeTraining/nodejstraining/Testing.pdf'

fs.readFile(filepath, (err, pdfBuffer) => {
    // pdfBuffer contains the file content
    new pdfreader.PdfReader().parseBuffer(pdfBuffer, function(err, item) {
      if (err) callback(err);
      else if (!item) callback();
      else if (item.text) console.log(item.text);
    });
  });
