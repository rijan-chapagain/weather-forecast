const fs = require('fs');

function reqJqueryGraph(request, response){
	console.log("request handler 'jqueryGraph' is reading file");

	fs.readFile('./js/jqueryGraph.js', function(err, query)
	{
		console.log("jquery is reading file.");

		if(err){throw(err);}
		response.writeHead(200, {"Content-Type": "text/javascript"} );
		response.write(query);
		response.end();
		console.log("Graph read successfully");
	});
}

function reqJqueryTable(request, response){
	console.log("request handler 'jqueryTable' is reading file");

	fs.readFile('./js/jqueryTable.js', function(err, tableData)
	{
		console.log("jquery is reading table.");
		if(err){throw(err);}
		response.writeHead(200, {"Content-Type": "text/javascript"} );
		response.write(tableData);
		response.end();
		console.log("jquery read successfully");
	});
}

exports.reqJqueryGraph = reqJqueryGraph;
exports.reqJqueryTable = reqJqueryTable;
