var fs = require('fs');
const { parse } = require('querystring');
//  socket.set('transports', [ 'websocket', 'htmlfile', 'xhr-polling' ]);


/**
 * 
 * @param {object} request 
 * @param {object} response 
 */
function reqDisplay(request, response){
    console.log("Request handler 'display' was called.");
    display(request, response);
}

function display(request, response)
{
    fs.readFile('../data/2007.xml', function (err, data) {
        if (err) {
            throw err; 
        }   
    // var data = fs.readFileSync('../data/2007.xml');
    
    //     var body =+ data.toString;

        console.log(data);

        response.writeHead( 200, {"Content-Type": "text/html"} );
        response.write(data);
        response.end();
    });
}

exports.reqDisplay = reqDisplay;
exports.display = display;
