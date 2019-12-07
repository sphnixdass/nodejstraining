var fs = require('fs');
var pdfreader = require("pdfreader");

filepath = '/home/dass/Desktop/DassNodeTraining/nodejstraining/Testing.pdf'

var rows = {}; // indexed by y-position
var temptxt = "";

function printRows() {
    
  Object.keys(rows) // => array of y-positions (type: float)
    .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
    .forEach(y => {(console.log((rows[y] || []).join("")));
    temptxt += (rows[y] || []).join("");
        }
    );

    console.log(temptxt);
}
 
new pdfreader.PdfReader().parseFileItems(filepath, function(
  err,
  item
) {
  if (!item || item.page) {
    // end of file, or page
    printRows();
    //console.log("PAGE:", item.page);
    rows = {}; // clear rows for next page
  } else if (item.text) {
    // accumulate text items into rows object, per line
    console.log('rows ==>' + rows + item.y);
    (rows[item.y] = rows[item.y] || []).push(item.text);
  }
});

