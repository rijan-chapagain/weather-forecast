# weather-forecast

Visualization of weather data in SPA using Node.js, AJAX, jQuery, HTML, CSS, and XSLT.


## Installation

Use the package manager [npm](https://www.npmjs.com/package/) to install node modules.

```
npm install
```

## Usage

```node
    // download data files based on user inputs year
    // pipe data to save downloaded data
    const file = fs.createWriteStream(`../data/${year}`);
    http.get(url, function(res) {        
        res.pipe(downloadPath);
    });


    // read and compare the downloaded data file and actual data file using buffer
    // if there is problem in downloading then display results from actual data file
    const downloadPathBuffer = Buffer.from(fs.readFileSync(`../downloads/${year}`));
    const dataPathBuffer = Buffer.from(fs.readFileSync(`../data/${year}`));

    var checkBuffer = downloadPathBuffer.includes(dataPathBuffer);
    
    if(checkBuffer)
    {
        readDataFile(downloadPath, callbackResult => {
            processing.calculation(request, response, callbackResult);
        });   
    }
    else
    {
        readDataFile(dataPath, callbackResult => {
            processing.calculation(request, response, callbackResult);
        });
    }

    // store avgWs, currentWs and currentsr in JSON object array in month-1 position
    weatherObjArray[month-1] = {'avgWs':avgWs, 'totalWs': currentws,'totalSr': currentsr};

```
## Description
This application is a part of the university assessment of the unit ICT375 (Advance Web Programming). 

## Purpose
Purpose of weather_forecast app is to read data from the data file, convert XML into JSON format and display data of user-requested timeframe(2007-2016) and measures(solar rad, wind speed, both) in users choice of format(graph, table, both).
