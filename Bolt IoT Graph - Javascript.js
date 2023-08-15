google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('datetime', 'Time');
  data.addColumn('number', 'Voltage Drop');

  // Replace 'time_stamp' and 'your_variable_name' with your actual data variables
  var chartData = [
    // [new Date('timestamp'), voltageValue],
    // ... repeat for more data points
  ];

  data.addRows(chartData);

  var options = {
    title: 'Voltage Drop Monitor',
    curveType: 'function',
    crosshair: { trigger: 'both' },
    hAxis: { title: 'Time' },
    vAxis: { title: 'Voltage Drop' },
    legend: 'none'
  };

  var chart = new google.visualization.PredictionChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}


HTML:
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
