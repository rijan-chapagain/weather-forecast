var fs = require('fs');
var xmldom = require('xmldom').DOMParser;
var fs = require('fs');
const xml2js = require('xml2js');
var parser, doc, tNodes;
var processing = require('./processing');

parser = new xmldom();

/**
 * 
 * @param {object} request 
 * @param {object} response 
 */
function reqDisplay(request, response, result)
{
    console.log("Request handler 'display' was called.");
    display(request, response, result);
}

function display(request, response, result)
{
    var year = (result.year);
    var format = (result.format);

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

    function convertXml2Json(request, callback) {
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

                xml2js.parseString(doc, { explicitArray : false }, (err, result) => {
                    if(err) {
                        throw err;
                    }
                
                    var recordData = result.weather.record;
                    console.log(typeof(recordData));

                    callback(recordData);
                });
            });
        }
        else if(year.includes("json"))
        {
            console.log("you are in json file");
            fs.readFile(path, 'utf-8', function (err, data) 
            {
                if (err)
                {
                    throw err;
                }
                var jsonobj = JSON.parse(data);
                var recordData = jsonobj.weather.record;

                callback(recordData);
            });
        }
        else
        {
            callback(null);
        }
    }//end of collectRequest function

    convertXml2Json(request, callbackResult => {
        // console.log(callbackResult);
        // userRequest(callbackResult);
        processing.calculation(request, response, callbackResult, result);
    });

    function userRequest(callbackResult)
    {
        //check user requested date
        if(format === "table")
        {
            console.log("format was table");
            
            // console.log(callbackResult);

        }
        else if(format === "graph")
        {
            console.log("format was graph");
            // 
        }
        else if(format === "both")
        {
            console.log("format was both");
            // 
        }

        //output format
        // if(format === "table")
        // {
        //     console.log("format was table");
            
        //     console.log(callbackResult);

        // }
        // else if(format === "graph")
        // {
        //     console.log("format was graph");
        //     // 
        // }
        // else if(format === "both")
        // {
        //     console.log("format was both");
        //     // 
        // }

        //output measure

        // if(measure === "ws")
        // {
        //     console.log("measure was wind speed");
            
        //     console.log(callbackResult);

        // }
        // else if(measure === "sr")
        // {
        //     console.log("measure was solar radiation");
        //     // 
        // }
        // else if(measure === "both")
        // {
        //     console.log("measure was both");
        //     // 
        // }
    }
}

exports.reqDisplay = reqDisplay;
exports.display = display;
