var fs = require('fs');
var xmldom = require('xmldom').DOMParser;
const xml2js = require('xml2js');
var parser, doc;

var processing = require('./processing');
parser = new xmldom();

/**
 * display message in terminal
 * call display function
 * 
 * @param {object} request 
 * @param {object} response 
 * @param {object} result
 */
function reqDisplay(request, response, result)
{
    console.log("Request handler 'display' was called.");
    display(request, response, result);
}

/**
 * compare downloaded file with data file using buffer
 * if true send download path else data path
 * 
 * @param {object} request 
 * @param {object} response 
 * @param {object} result 
 */
function display(request, response, result)
{
    var year = (result.year);

    if(year >= '2010')
    {
        year += '.json';
    }
    if(year <= '2009')
    {
        year += '.xml';
    }

    var downloadPath = (`../downloads/${year}`);
    var dataPath = (`../data/${year}`);

    const downloadPathBuffer = Buffer.from(fs.readFileSync(`../downloads/${year}`));
    const dataPathBuffer = Buffer.from(fs.readFileSync(`../data/${year}`));

    var checkBuffer = downloadPathBuffer.includes(dataPathBuffer);
    
    if(checkBuffer)
    {
        readDataFile(downloadPath, callbackResult => {
            processing.calculation(request, response, callbackResult);
        });   
    }
    else
    {
        readDataFile(dataPath, callbackResult => {
            processing.calculation(request, response, callbackResult);
        });
    }
      
    /**
     * callback function parsing XML and JSON files 
     * and return data in JSON format
     * 
     * @param {object} request 
     * @param {object} callback 
     */
    function readDataFile(path, callback) {
        if(path.includes("xml"))
            {
                console.log("Converting XML file to JSON");
                fs.readFile(path, 'utf-8', function (err, data) 
                {
                    if (err)
                    {
                        throw err;
                    }
                    doc = parser.parseFromString(data, 'application/xml');

                    xml2js.parseString(doc, { explicitArray : false }, (err, result) => {
                        if(err) {
                            throw err;
                        }                    
                        callback(result.weather.record);
                    });
                });
            }
            else if(path.includes("json"))
            {
                console.log("Reading JSON file");
                fs.readFile(path, 'utf-8', function (err, data) 
                {
                    if (err)
                    {
                        throw err;
                    }
                    var jsonobj = JSON.parse(data);
                    callback(jsonobj.weather.record);
                });
            }
            else
            {
                callback(null);
            }
    }//end of readFile function
}// end of display function

exports.reqDisplay = reqDisplay;
exports.display = display;
