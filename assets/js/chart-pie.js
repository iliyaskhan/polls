(function( $, doc ) {
    "use strict";

    (function(){

        google.charts.load('current', {packages: ['corechart']});
        google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
			// Define the chart to be drawn.
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Element');
			data.addColumn('number', 'Percentage');
			data.addRows([
        		
                ['Iron Man', 1200],
                ['Superman', 983],
                ['Batman', 1102],
                ['Wonder Woman', 254],
                ['Other', 523]
      		]);
			
			var options = {
                chartArea: {width: '50%', height: '500'},
              
                hAxis: {
                    minValue: 0
                },
               
            };
			
			// Instantiate and draw the chart.
			var chart = new google.visualization.PieChart(document.getElementById('forminator-chart-pie'));
			
			chart.draw(data, options);
			
    	}

    }());

}( jQuery, document ));