var fs = require('fs');
const { parse } = require('querystring');
var xmldom = require('xmldom').DOMParser;
var fs = require('fs');
parser = new xmldom();
var parser, doc, tNodes, record;

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
    var delimeter = '-';
    var year = (result.month).split(delimeter)[0];
    var month = (result.month).split(delimeter)[1];
   
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
            tNodes = doc.getElementsByTagName('weather');
            // console.log(tNodes);
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
            // console.log(data);
        });
    }

}

exports.reqDisplay = reqDisplay;
exports.display = display;
