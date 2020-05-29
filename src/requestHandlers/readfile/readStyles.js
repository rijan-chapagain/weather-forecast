var fs = require('fs');

/**
 * 
 * @param {object} request 
 * @param {object} response 
 */
function reqCss(request, response)
{
    console.log("Request handler 'css' was called.");

    fs.readFile('stylesheets/css/styles.css', function (err, style) {
        if (err) {
            throw err; 
        }   
        response.writeHead( 200, {"Content-Type": "text/css"} );
        response.write(style);
        response.end();
    });
}

/**
 * 
 * @param {object} request 
 * @param {object} response 
 */
function reqXsl(request, response)
{
    console.log("Request handler 'Xsl' was called.");

    fs.readFile('stylesheets/xsl/tohtml.xsl', function (err, style) {
        if (err) {
            throw err; 
        }   
        response.writeHead( 200, {"Content-Type": "text/xsl"} );
        response.write(style);
        response.end();
    });
}

exports.reqCss = reqCss;
exports.reqXsl = reqXsl;