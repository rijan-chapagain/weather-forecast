var fs = require('fs');
const http = require('http');

function reqDownload(result)
    {
        console.log("Request handler 'download' is downloading data file")
        var delimeter = '-';
        var year = (result.month).split(delimeter)[0];
        
        if(year >= '2010')
        {
            var url = `http://it.murdoch.edu.au/~S900432D/ict375/data/${year}.json`;
            const file = fs.createWriteStream(`../downloads/${year}.json`);

            http.get(url, function(res) {        
                res.pipe(file);
            });
        }
        if(year <= '2009')
        {
            var url = `http://it.murdoch.edu.au/~S900432D/ict375/data/${year}.xml`;
            const file = fs.createWriteStream(`../downloads/${year}.xml`);

            http.get(url, function(res) {        
                res.pipe(file);
            });
        }
    }//end of reqDownload function

exports.reqDownload = reqDownload;