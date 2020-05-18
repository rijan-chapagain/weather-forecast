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
    display(request, response);
}

function display(request, response)
{
    fs.readFile('../data/2007.xml', 'utf-8', function (err, data) 
    {
        if (err)
        {
            throw err;
        }
        doc = parser.parseFromString(data, 'application/xml');
        tNodes = doc.getElementsByTagName('weather');

        table();
    });

    function table()
    {
        let date, time, windSpeed, solarRad;
        console.log(tNodes.length);

        
  
        var tableData = "<!DOCTYPE html>" + 
            "<html>" + 
            "<head>" + 
            " <style>"+
            "table {font-family: arial, sans-serif; border-collapse: collapse; width: 100%;}"+
            "td, th { border: 1px solid #dddddd; text-align: left; padding: 8px;}" +
            "tr:nth-child(even) {background-color: #dddddd;}" +
            ".back{padding:15px 32px;color:white; background-color:rgb(186,121,0); border-radius:50%;font-size:16px; cursor:pointer;}"+
            "h1{text-align:center;}"+
            "</style>"+
            "<title>Weathers' detail</title>" +
            "<head>" + 
            "<body>" +
            "<h1>Details of weather data</h1>" +
            '<a href="/start"> <input type="button" class="back" name="back" value="&laquo; Back to home"></a>'+
            "<table>" + 
            "<tr>" +
            `<th>Date</th>` +
            `<th>Time</th>`+
            `<th>Wind Speed</th>`+
            `<th>Solar radiation</th>`+
            "</tr><tr>";

            for(var i=0; i < tNodes.length; i++)
            {
                record = tNodes[i].getElementsByTagName('record');
                console.log(record.length);
                // "</tr><tr>";

                for(let j = 0; j<record.length; j++)
                {
                    date = record[j].getElementsByTagName('date')[0];
                    time = record[j].getElementsByTagName('time')[0];
                    windSpeed = record[j].getElementsByTagName('ws')[0];
                    solarRad = record[j].getElementsByTagName('sr')[0];
                    
                    tableData += `<td>${date} </td>`+
                        `<td>${time} </td>`+
                        `<td>${windSpeed} </td>`+
                        `<td>${solarRad} </td>`+"<tr/>";
                }
            }

            tableData += "</table></body>" +
                "</html>";

        response.writeHead( 200, {"Content-Type": "text/html"} );
        response.write(tableData);
        response.end();    
    }
}

exports.reqDisplay = reqDisplay;
exports.display = display;
