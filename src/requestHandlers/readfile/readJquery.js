const fs = require('fs');
// console.log("jquery read successfully");

function reqJquery(request, response){
	console.log("request handler 'jquery' is reading plugins and file");

	// fs.readFile('jqueryPlugins/canvasjs_charts.min.js', function(err, data)
	// {
	// 	if(err){throw(err);}
	// 	response.writeHead(200, {"Content-Type": "text/javascript"} );
	// 	response(data);
	// 	response.end();
	// });

	fs.readFile('js/jquery.js', function(err, query)
	{
		console.log("jquery is reading file.");

		if(err){throw(err);}
		response.writeHead(200, {"Content-Type": "text/javascript"} );
		response.write(query);
		response.end();
		console.log("jquery read successfully");
	});

}

exports.reqJquery = reqJquery;
