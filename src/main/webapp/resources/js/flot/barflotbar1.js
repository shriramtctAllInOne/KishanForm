	

$(document).ready(function () {
	
	createbarGraph();
	

	
});

function createbarGraph(){
	var data = [ ["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9] ];

	$.plot("#barplaceholder", [ data ], {
		series: {
			bars: {
				show: true,
				barWidth: 0.6,
				align: "center"
			}
		},
		xaxis: {
			mode: "categories",
			tickLength: 0
		},
colors: ["#FF0000", "#00FF00"]
	});	
}


function createflotPieChart()
{
	var data = [],
	series = Math.floor(Math.random() * 6) + 3;
	data = [{
		label: "series1",
		data: 10
	},
	{
		label: "series2",
		data: 20
	},
{
	label: "series3",
	data: 30
}

];
var placeholder = $("#pieflotplaceholder");
placeholder.unbind();

	$("#title").text("Hidden Labels");
	$("#description").text("Labels can be hidden if the slice is less than a given percentage of the pie (10% in this case).");

	$.plot(placeholder, data, {
		series: {
			pie: { 
				show: true,
				radius: 1,
				label: {
					show: true,
					radius: 2/3,
					formatter: labelFormatter,
					threshold: 0.1
				}
			}
		},
		legend: {
			show: false
		}
	});

	setCode([
		"$.plot('#pieflotplaceholder', data, {",
		"    series: {",
		"        pie: {",
		"            show: true,",
		"            radius: 1,",
		"            label: {",
		"                show: true,",
		"                radius: 2/3,",
		"                formatter: labelFormatter,",
		"                threshold: 0.1",
		"            }",
		"        }",
		"    },",
		"    legend: {",
		"        show: false",
		"    }",
		"});"
	]);

}

// A custom label formatter used by several of the plots

function labelFormatter(label, series) {
	return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
}

//

function setCode(lines) {
	$("#code").text(lines.join("\n"));
}












	
	


