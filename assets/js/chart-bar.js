(function( $, doc ) {
    "use strict";

    (function(){

        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBarColors);

        function drawBarColors(){
            
            var data = google.visualization.arrayToDataTable([
                ['Hero', 'Likes'],
                ['Iron Man', 1200],
                ['Superman', 983],
                ['Batman', 1102],
                ['Wonder Woman', 254],
                ['Other', 523]
            ]);
            
            var options = {
                chartArea: {width: '50%'},
                colors: ['#17A8E3'],
                hAxis: {
                    minValue: 0
                },
                legend: { position: "none" },
            };
            
            var chart = new google.visualization.BarChart(document.getElementById('forminator-chart-bar'));
            
            chart.draw(data, options);
            
        }

    }());

}( jQuery, document ));