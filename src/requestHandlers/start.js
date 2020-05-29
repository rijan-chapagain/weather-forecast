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

    fs.readFile('./html/index.html', function (err, html) {
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
    console.log("Request handler 'check' is processing.");
    
    collectRequestData(request, result => {
        console.log(result);
        download.reqDownload(result);
        display.reqDisplay(request, response, result);

        // if(`${result.output}`=== "both"){
        //     reqStart(request, response);
        // }
        // else if(`${result.output}`=== ""){
        //     reqStart(request, response);
        // }
        // else{
        //     reqStart(request,response);
        // }
    });

    function collectRequestData(request, callback) {
        const FORM_URLENCODED = 'application/x-www-form-urlencoded';
        if(request.headers['content-type'] === FORM_URLENCODED){
            
            let body = [];
            
            request.on('data', (chunk) => {
                body += chunk.toString(); //convert buffer to string
            });

            request.on('end', () => {
                callback(parse(body))

                response.on('error', (err) => {
                    console.error(err);
                });
            });
        }
        else{
            callback(null);
        }
    }//end of collectRequest function
}//end of reqCheck function

exports.reqStart = reqStart;
exports.reqCheck = reqCheck;
