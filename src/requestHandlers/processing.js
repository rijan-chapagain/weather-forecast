var start = require('./start');
var readJquery = require('./readfile/readJquery');



/**
 * 
 * @param {object} request 
 * @param {object} response 
 * @param {object} callbackResult 
 * @param {object} result 
 */
function calculation(request, response, callbackResult, result)
{
    console.log("Request handler 'calculation' was called.");

    var weatherObj = {'avgWs':0, 'totalWs':0, 'totalSr':0};
    var weatherObjArray = [weatherObj,weatherObj,weatherObj,weatherObj,weatherObj,
        weatherObj,weatherObj,weatherObj,weatherObj,weatherObj,weatherObj,weatherObj];

    var count = "";
    var countArray = [count,count,count,count,count,count,count,count,count,count,count,count,];

    for(var i=0; i<callbackResult.length; i++)
    {
        var currentws = callbackResult[i]['ws'] * 3.6;
        var currentsr = 0;
        if(callbackResult[i]['sr'] >= 100)
        {
            currentsr = callbackResult[i]['sr'] / 3600000;
        }
        var month = callbackResult[i]['date'].slice(3,5);
        
        currentws += weatherObjArray[month-1]['totalWs'];
        currentsr += weatherObjArray[month-1]['totalSr'];
        
        avgWs = currentws / (countArray[month-1]);

        weatherObjArray[month-1] = {'avgWs':avgWs, 'totalWs': currentws,'totalSr': currentsr};
        if(weatherObjArray[month-1])
        {
            countArray[month-1] ++;
        }
    }
    
    // console.log("count is:  ", countArray);
    for(var i=0; i<12; i++)
    {
        delete weatherObjArray[i]['totalWs'];
    }

    console.log("weatheeObjArray: ", weatherObjArray);
    readJquery.reqJqueryGraph(request,response);
    // sendData(request, response, weatherObjArray);
}

function sendData(request, response, weatherObjArray){

    var url = request.url.slice(0,5);
    // console.log(weatherObjArray);
    console.log(url);

    if (url === "/chec") {

        start.reqCheck(request, response);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        // response.write(JSON.stringify({ now: new Date() }));
        response.write("asdfghj");
        console.log("reasult in calculation are: ");
        response.end();

    } else {

        response.end('Invalid request');
        console.log("invalid request");
        console.log(url)
    }
}

exports.calculation = calculation;
exports.sendData = sendData;