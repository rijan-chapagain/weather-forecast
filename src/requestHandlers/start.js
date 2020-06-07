var fs = require('fs');
const http = require('http');
const { parse } = require('querystring');
var display = require('./display');
var download = require('./download');

/**
 * send status report to server
 * display html form on client 
 * generate form with 3 options to choose where to go
 * 
 * @param {object} request 
 * @param {object} response 
 */
function reqStart(request, response){
    console.log("Request handler 'start' was called.");

    fs.readFile("./html/index.html", function (err, html) {
        if (err) {
            throw err; 
        }   
        response.writeHead( 200, {"Content-Type": "text/html"} );
        response.write(html);
        response.end();
    });
}

/**
 * checking the incoming data
 * send it to requested request handler
 * 
 * @param {object} request 
 * @param {object} response 
 */
function reqCheck(request, response){
    console.log("Request handler 'reqCheck' is processing.");

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    request.on('data', function (data) 
    {
        var body = data.toString();
        var result = parse(body);

        download.reqDownload(result);
        display.reqDisplay(request, response, result);
    });
}//end of reqCheck function

exports.reqStart = reqStart;
exports.reqCheck = reqCheck;