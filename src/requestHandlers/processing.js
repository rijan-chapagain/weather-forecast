
/**
 * 
 * @param {object} request 
 * @param {object} response 
 * @param {object} callbackResult 
 * @param {object} formResult 
 */
function calculation(request, response, callbackResult, formResult)
{
    console.log("Request handler 'calculation' was called.");
    console.log(callbackResult);

    var weatherObj = {'avgWs':0, 'totalSr':0};
    var weatherObjArray = [weatherObj,weatherObj,weatherObj,weatherObj,weatherObj,
        weatherObj,weatherObj,weatherObj,weatherObj,weatherObj,weatherObj,weatherObj];
    
    let count = 0;
    console.log("date obj ", weatherObj)

    for(var i=0; i<callbackResult.length; i++)
    {
        
        currentws = callbackResult[i]['ws'] * 3.6;
        currentsr = callbackResult[i]['sr'] / 3600000;

        var month = callbackResult[i]['date'].slice(3,5);
            
        currentws += weatherObjArray[month-1]['avgWs'];
        currentsr += weatherObjArray[month-1]['totalSr'];

        weatherObjArray[month-1] = {'avgWs': currentws,'totalSr': currentsr};  
    }
    
    console.log("weather obj outside loop: ", weatherObjArray);
}

exports.calculation = calculation;
