var fs = require('fs');

/**
 * 
 * @param {object} request 
 * @param {object} response 
 */
function reqValidate(request, response)
{
    console.log("Request handler 'reqValidate' was called.");

    fs.readFile('js/htmlValidator.js', function (err, script) {
        if (err) {
            throw err; 
        }   
        response.writeHead( 200, {"Content-Type": "text/javascript"} );
        response.write(script);
        response.end();
    });
}

exports.reqValidate = reqValidate;
