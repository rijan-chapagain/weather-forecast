    
$(function() {
	alert('youy are in jquery');
		$.ajax({
			url: '/data',
			data: {
				format: 'json'
			},
			error: function() {
			$('#info').html('<p>An error has occurred</p>');
			},

			dataType: 'json',
			success: function(data) {
				console.log("congrats data read in jquery successfully.", data);
			},
			error:function(err){
				console.log(err);
			},
			type: 'GET'
		});

		// $(document).ready(function(){
		// 	$("button").click(function(){
		// 	  $.get("demo_test.asp", function(data, status){
		// 		alert("Data: " + data + "\nStatus: " + status);
		// 	  });
		// 	});
		//   });

		// $.get("/data", function(data, status){
		// 	alert("Data: " + data + "\nStatus: " + status);
		// 	console.log("data read in jquery")					
		// });



	// $(".chartContainer").CanvasJSChart({
	// 	title: {
	// 		text: "Monthly Rainfall"
	// 	},
	// 	axisY: {
	// 		title: "Rainfall in mm",
	// 		includeZero: false
	// 	},
	// 	axisX: {
	// 		interval: 1
	// 	},
	// 	data: [
	// 	{
	// 		type: "line", //try changing to column, area
	// 		// toolTipContent: "{label}: {y} mm",
	// 		dataPoints: [
	// 			{ label: "Jan",  y: 5.28 },
	// 			{ label: "Feb",  y: 3.83 },
	// 			{ label: "March",y: 6.55 },
	// 			{ label: "April",y: 4.81 },
	// 			{ label: "May",  y: 2.37 },
	// 			{ label: "June", y: 2.33 },
	// 			{ label: "July", y: 3.06 },
	// 			{ label: "Aug",  y: 2.94 },
	// 			{ label: "Sep",  y: 5.41 },
	// 			{ label: "Oct",  y: 2.17 },
	// 			{ label: "Nov",  y: 2.17 },
	// 			{ label: "Dec",  y: 2.80 }
	// 		]
	// 	}
	// 	]
	// });
});
