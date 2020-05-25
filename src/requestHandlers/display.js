var fs = require('fs');
const { parse } = require('querystring');
var xmldom = require('xmldom').DOMParser;
var fs = require('fs');
const xml2js = require('xml2js');
var parser, doc, tNodes;

parser = new xmldom();

/**
 * 
 * @param {object} request 
 * @param {object} response 
 */
function reqDisplay(request, response, result)
{
    console.log("Request handler 'display' was called.");
    display(response, result);
}

function display(response, result)
{
    var year = (result.year);
    var sMonth = (result.sMonth);
    var eMonth = (result.eMonth);

   
    if(year >= '2010')
    {
        year += '.json';
    }
    if(year <= '2009')
    {
        year += '.xml';
    }
   
    var path = `../data/${year}`;

    console.log(path)
    
    if(year.includes("xml"))
    {
        console.log("you are in xml file");
        fs.readFile(path, 'utf-8', function (err, data) 
        {
            if (err)
            {
                throw err;
            }
            doc = parser.parseFromString(data, 'application/xml');
            // tNodes = doc.getElementsByTagName('weather');

            xml2js.parseString(doc, (err, result) => {
                if(err) {
                    throw err;
                }
            
                // `result` is a JavaScript object
                // convert it to a JSON string
                const jsonxml = JSON.stringify(result, null, 4);
                // console.log(typeof(jsonxml))
            });

        });
    }

    if(year.includes("json"))
    {
        console.log("you are in json file");
        fs.readFile(path, 'utf-8', function (err, data) 
        {
            if (err)
            {
                throw err;
            }
            // console.log(typeof(data));
        });
    }


}

exports.reqDisplay = reqDisplay;
exports.display = display;
