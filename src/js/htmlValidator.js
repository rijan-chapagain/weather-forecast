
/**
 * function called after submiting html form
 * validate html form
 * 
 */
function validateForm()
{
    // get text field user input values
    var yearTxt = document.forms["myForm"]["year"].value;
    var sMonthTxt = document.forms["myForm"]["sMonthTxt"].value;
    var eMonthTxt = document.forms["myForm"]["eMonthTxt"].value;
    var measure = document.forms["myForm"]["measure"].value;
    var format = document.forms["myForm"]["format"].value;

    // get options of datalist using id 
    var years = document.getElementById("year");
    var sMonth = document.getElementById("sMonth");
    var eMonth = document.getElementById("eMonth");

    // initilizing empty array
    var value = [];
    var smvalue = [];
    var emvalue = [];

    storeInArray(value, years, smvalue, sMonth, emvalue, eMonth);
   

    // check year text input with year dropdown values
    if( yearTxt != value[0] && yearTxt != value[1] && yearTxt != value[2] && yearTxt != value[3] && yearTxt != value[4] && yearTxt != value[5] && yearTxt != value[6] && yearTxt != value[7] && yearTxt != value[8] && yearTxt != value[9])
    {
        document.getElementById("message").innerHTML = "*Invalid";
        document.getElementById("messageDetail").innerHTML = "*Please enter valid date from dropdown list";
        return false;
    }
    else
    {
        document.getElementById("message").innerHTML = "";
        document.getElementById("messageDetail").innerHTML = "";
    }
   
    // check starting month text input with its dropdown values
    if( sMonthTxt != smvalue[0] && sMonthTxt != smvalue[1] && sMonthTxt != smvalue[2] && sMonthTxt != smvalue[3] && sMonthTxt != smvalue[4] && sMonthTxt != smvalue[5] && sMonthTxt != smvalue[6] && sMonthTxt != smvalue[7] && sMonthTxt != smvalue[8] && sMonthTxt != smvalue[9] && sMonthTxt != smvalue[10] && sMonthTxt != smvalue[11])
    {
        document.getElementById("sMessage").innerHTML = "*Invalid";
        document.getElementById("sMessageDetail").innerHTML = "*Please enter valid starting month from dropdown list";
        return false;
    }
    else
    {
        document.getElementById("sMessage").innerHTML = "";
        document.getElementById("sMessageDetail").innerHTML = "";
    }
    // check ending month text input with its dropdown values
    if( eMonthTxt != emvalue[0] && eMonthTxt != emvalue[1] && eMonthTxt != emvalue[2] && eMonthTxt != emvalue[3] && eMonthTxt != emvalue[4] && eMonthTxt != emvalue[5] && eMonthTxt != emvalue[6] && eMonthTxt != emvalue[7] && eMonthTxt != emvalue[8] && eMonthTxt != emvalue[9] && eMonthTxt != emvalue[10] && eMonthTxt != emvalue[11])
    {
        document.getElementById("eMessage").innerHTML = "*Invalid";
        document.getElementById("eMessageDetail").innerHTML = "*Please enter valid ending month from dropdown list";
        return false;
    }
    else
    {
        document.getElementById("eMessage").innerHTML = "";
        document.getElementById("eMessageDetail").innerHTML = "";
    }
    // check if the ending month is after starting month or not
    for(var i=0; i<smvalue.length; i++)
    {
        if(sMonthTxt === smvalue[i])
        {
            for(var j=0; j<i; j++)
            {
                delete emvalue[j];
            }
        }
    }

    // check ending month text input with its dropdown values
    if( eMonthTxt != emvalue[0] && eMonthTxt != emvalue[1] && eMonthTxt != emvalue[2] && eMonthTxt != emvalue[3] && eMonthTxt != emvalue[4] && eMonthTxt != emvalue[5] && eMonthTxt != emvalue[6] && eMonthTxt != emvalue[7] && eMonthTxt != emvalue[8] && eMonthTxt != emvalue[9] && eMonthTxt != emvalue[10] && eMonthTxt != emvalue[11])
    {
        document.getElementById("eMessage").innerHTML = "*end before start";
        document.getElementById("eMessageDetail").innerHTML = "*Ending Month cannot be before starting month";
        return false;
    }
    else
    {
        
        document.getElementById("eMessage").innerHTML = "";
        document.getElementById("eMessageDetail").innerHTML = "";
        // storing individual userinputs in JSON format
        var userInputs = {
            'year': yearTxt,
            'sMonth': sMonthTxt,
            'eMonth': eMonthTxt,
            'measure': measure,
            'format': format
        }

        postData(userInputs, smvalue);
        return false;
    }
} //end of validateForm function

/**
 * store each options of datalist in array
 * 
 * @param {Array} value 
 * @param {String} years 
 * @param {Array} smvalue 
 * @param {String} sMonth 
 * @param {Array} emvalue 
 * @param {String} eMonth 
 */
function storeInArray(value, years, smvalue, sMonth, emvalue, eMonth)
{
    for (var i = 0; i < years.options.length; i++) {
        value[i] = years.options[i].value;
    }

    for (var j = 0; j < sMonth.options.length; j++) {
        smvalue[j] = sMonth.options[j].value;
    }
    
    for (var k = 0; k < eMonth.options.length; k++) {
        emvalue[k] = eMonth.options[k].value;
    }
}// end of storeInArray function

/**
 * send form userinputs to url /check
 * returns weather object array string 
 * send data to display
 * 
 * @param {object} userInputs 
 * @param {String} format
 */
function postData(userInputs, smvalue){
    $.ajax({
        type: 'POST',
        url: '/check',
        data: userInputs,
        success: function(weatherObjArrStr)
        {
            display(weatherObjArrStr, userInputs, smvalue);
        },
        error:function()
        {
            alert('Error sending userinputs \nMay be your server is down!'); 
        }
    });
}

/**
 * store json string data into individual array
 * display graph and table
 * 
 * @param {string} weatherObjArrStr 
 */
function display(weatherObjArrStr, userInputs, smvalue){
    var weatherObjArr = JSON.parse(weatherObjArrStr);
    var avgWs = [];
    var totalSr = [];
    var avgWsArray = [avgWs,avgWs,avgWs,avgWs,avgWs,avgWs,avgWs,avgWs,avgWs,avgWs,avgWs,avgWs];
    var totalSrArray = [totalSr,totalSr,totalSr,totalSr,totalSr,totalSr,totalSr,totalSr,totalSr,totalSr,totalSr,totalSr,];
    
    for (i = 0; i < weatherObjArr.length; i++) {
        avgWsArray[i] = weatherObjArr[i].avgWs;
        totalSrArray[i] = weatherObjArr[i].totalSr;           
    }

    $('.tableData').show();
    $('.chartContainer').show();

    if(userInputs['format'] === "table")
    {
        // display table
        $('.chartContainer').hide(); 
        dispTable (smvalue, avgWsArray, totalSrArray, userInputs);
    }
    else if (userInputs['format'] === "graph")
    {
        // display graph only
        $('.tableData').hide();
        dispGraph(userInputs, smvalue, totalSrArray, avgWsArray);
    }
    else
    {
        // display both
        dispTable (smvalue, avgWsArray, totalSrArray, userInputs);
        dispGraph(userInputs, smvalue, totalSrArray, avgWsArray);
    }

} //end of display function

/**
 * 
 * @param {Array} smvalue 
 * @param {Array} totalSrArray 
 * @param {Array} avgWsArray 
 * @param {string} yearTxt 
 */
function dispGraph(userInputs, smvalue, totalSrArray, avgWsArray)
{
    var measurement;
    var start = userInputs["sMonth"];
    var end = userInputs["eMonth"];
    var indexStart = smvalue.indexOf(start);
    var indexEnd = smvalue.indexOf(end) + 1;
    var diff = indexEnd - indexStart;
    var wsData = [];
    var srData = [];

    for(var i=0; i<diff; i++)
    {
        wsData[i] = { label: smvalue[indexStart + i],  y: avgWsArray[indexStart + i] };
    }

    for(var i=0; i<diff; i++)
    {
        srData[i] = { label: smvalue[indexStart + i],  y: totalSrArray[indexStart + i] };
    }

    if(userInputs['measure'] === "ws")
    {
        measurement = [{
            type: "line",
            name: "Wind Speed",
            showInLegend: true,
            dataPoints: wsData            
        }];
    }
    else if(userInputs["measure"] === "sr")
    {
        measurement = [{
            type: "spline",
            name: "Solar Radiation",
            axisYType: 'secondary',
            showInLegend: true,
        
            dataPoints: srData
        }];
    }
    else
    {
        measurement = [{
            type: "spline",
            name: "Wind Speed",
            showInLegend: true,
        
            dataPoints: wsData
        },   
        {
            type: "spline",
            name: "Solar Radiation",
            axisYType: 'secondary',
            showInLegend: true,
        
            dataPoints: srData
        }];
    }
   

    var options = {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Avg Wind speed and total Solar Rad for year: " + userInputs['year']
        },
        subtitles: [{
            text: "Click Legend to Hide or Unhide Data Series"
        }],
        axisX: {
            title: "States"
        },
        axisY: {
            title: "Wind Speed (Km/h)",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC",
            includeZero: true
        },
        axisY2: {
            title: "Solar Rafiation (kWh/m2)",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E",
            includeZero: true
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },

        data : measurement
    };
    $(".chartContainer").CanvasJSChart(options);
    
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
}// end of dispGraph function

/**
 * 
 * @param {Array} smvalue 
 * @param {Array} avgWsArray 
 * @param {Array} totalSrArray 
 */
function dispTable (smvalue, avgWsArray, totalSrArray, userInputs)
{
    var data = [];

    for(var i=0; i<smvalue.length; i++)
    {
        data[i] = [smvalue[i], avgWsArray[i].toFixed(3), totalSrArray[i].toFixed(3)];
    }

    var dataSet = data;

    $('#table').DataTable({
        data : dataSet,
            'columns':[
                {title: `Months of year ` + userInputs['year']},
                {title: "Wind speed (Avg)"},
                {title: "Solar Radation (Total)"}
        ],
        "bDestroy" : true,
        "bSort" : false
    });
}//end of dispTable function