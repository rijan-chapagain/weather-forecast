
/**
 * get parsed data for processing
 * convert ws m/s into km/h and sr w/m2 into kWh/m2
 * calculate average, total wind speed &
 * total solar radiation
 * send processrd data to send data function 
 * 
 * @param {object} request 
 * @param {object} response 
 * @param {object} callbackResult 
 */
function calculation(request, response, callbackResult)
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
        
        // removing solar radiation below 100 w/m2
        if(callbackResult[i]['sr'] >= 100)
        {
            currentsr = callbackResult[i]['sr'] / 6000;
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
    }// end of for loop
    
    for(var i=0; i<11; i++)
    {
        delete weatherObjArray[i]['totalWs'];
    }

    console.log("weatheeObjArray: ", weatherObjArray);
    sendData(response, weatherObjArray);
}// end of calculation function

/**
 * get object array from calculation
 * response to jquery client with stringified data
 * 
 * @param {object} response 
 * @param {object array} weatherObjArray 
 */
function sendData(response, weatherObjArray){
    // convert object to string
    var jsonStr = JSON.stringify(weatherObjArray);

    response.end(jsonStr);
    console.log("Data successfully sent to client!!");
}

exports.calculation = calculation;
exports.sendData = sendData;