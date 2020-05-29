const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const fs = require ('fs');


function reqPlugins(request, response){
	fs.readFile('jqueryPlugins/canvasjs_charts.min.js', function(err, data)
	{
		if(err){throw(err);}
		response.writeHead(200, {"Content-Type": "text/javascript"} );
		response(data);
		response.end();
	});
	
}

function reqJquery(){

	console.log("req handler 'jquery' was called");
	exports = function() {
		var use = require('use-plugin')({prefix:'foo',module:module})
		var plugin_name = "https://canvasjs.com/assets/script/jquery.canvasjs.min.js";
		return {
		use: function( plugin_name ) {
			var plugin_description = use(plugin_name)
			
			// call the init function to init the plugin
			plugin_description.init()
		}
		}
	}
$(function() {
	$(".chartContainer").CanvasJSChart({
		title: {
			text: "Monthly Rainfall in Columbus - 1996"
		},
		axisY: {
			title: "Rainfall in mm",
			includeZero: false
		},
		axisX: {
			interval: 1
		},
		data: [
		{
			type: "line", //try changing to column, area
			// toolTipContent: "{label}: {y} mm",
			dataPoints: [
				{ label: "Jan",  y: 5.28 },
				{ label: "Feb",  y: 3.83 },
				{ label: "March",y: 6.55 },
				{ label: "April",y: 4.81 },
				{ label: "May",  y: 2.37 },
				{ label: "June", y: 2.33 },
				{ label: "July", y: 3.06 },
				{ label: "Aug",  y: 2.94 },
				{ label: "Sep",  y: 5.41 },
				{ label: "Oct",  y: 2.17 },
				{ label: "Nov",  y: 2.17 },
				{ label: "Dec",  y: 2.80 }
			]
		}
		]
	});
});


}

exports.reqJquery = reqJquery;
exports.reqPlugins = reqPlugins;