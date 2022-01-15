// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(callCharts);

function callCharts() {

    // Pune
    // drawChart(40, 15, 10, 7, 'pune-7th');
    drawChart(30, 20, 5, "6th", 'pune-6th');
    drawChart(40, 25, 10, "5th", 'pune-5th');
    drawChart(30, 23, 10, "4th", 'pune-4th');
    drawChart(25, 19, 9, "3rd", 'pune-3th');
    drawChart(32, 17, 5, "2nd", 'pune-2th');
    // drawChart(31, 20, 10, 8, 'pune-8th');

    // Bangalore
    drawChart(30, 23, 10, "4th", 'bangalore-4th');
    drawChart(25, 19, 9, "3rd", 'bangalore-3rd');
    drawChart(32, 17, 5, "2nd", 'bangalore-2nd');
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart(neutral, happy, notHappy, floor, elementId) {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Likely Neutral', neutral],
        ['Likely Not Happy', notHappy],
        ['Likely Happy', happy]
    ]);

    // Set chart options
    var options = {
        'title': "Sentiment of Employees On " + floor + " floor",
        'width': 400,
        'height': 300
    };

    console.log("elementId" + elementId)

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById(elementId));
    chart.draw(data, options);
}