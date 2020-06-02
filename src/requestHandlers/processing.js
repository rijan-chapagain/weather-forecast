
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
    // var weatherObj = [];
    console.log("date obj ", weatherObj)

    for(var i=0; i<callbackResult.length; i++)
    {
        currentws = callbackResult[i]['ws'] * 3.6;
        currentsr = callbackResult[i]['sr'] / 3600000;

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
    
    console.log("count is:  ", countArray);
    console.log("weather obj outside loop: ", weatherObjArray);
    
    // sendData(request, response, callbackResult, result);
}


exports.calculation = calculation;