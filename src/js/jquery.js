    
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
