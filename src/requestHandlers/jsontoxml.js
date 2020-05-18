const fs = require("fs");
const {parser} = require("querystring");
let body = {};
let delimiter = ",";

fs.readFile('../../data/2010.json', (err, data) => {
    if (err) throw err;

    body += data.toString(); //convert buffer to string

    const row = body.split('\n') ;

    var inrow = row[10].split(delimiter);

    // var matchedData = myTableData();


    console.log(inrow);

    console.log(body);

  });
