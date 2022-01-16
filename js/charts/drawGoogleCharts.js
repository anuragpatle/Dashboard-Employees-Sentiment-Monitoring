// Load the Visualization API and the corechart package.
google.charts.load("current", { packages: ["corechart"] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(callCharts);

function callCharts() {
  // Pune
  // drawFloorWiseDailyChart(40, 15, 10, 7, 'pune-7th');
  drawFloorWiseDailyChart(30, 20, 5, "6th", "pune-6th");
  drawFloorWiseDailyChart(40, 25, 10, "5th", "pune-5th");
  drawFloorWiseDailyChart(30, 23, 10, "4th", "pune-4th");
  drawFloorWiseDailyChart(25, 19, 9, "3rd", "pune-3th");
  drawFloorWiseDailyChart(32, 17, 5, "2nd", "pune-2th");
  // drawFloorWiseDailyChart(31, 20, 10, 8, 'pune-8th');

  // Bangalore
  drawFloorWiseDailyChart(30, 23, 10, "4th", "bangalore-4th");
  drawFloorWiseDailyChart(25, 19, 9, "3rd", "bangalore-3rd");
  drawFloorWiseDailyChart(32, 17, 5, "2nd", "bangalore-2nd");

  drawTimeWiseDailyChart();

  drawMonthWiseChart();
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawFloorWiseDailyChart(neutral, happy, notHappy, floor, elementId) {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Topping");
  data.addColumn("number", "Slices");
  data.addRows([
      ["Likely Neutral", neutral],
      ["Likely Not Happy", notHappy],
      ["Likely Happy", happy]
  ]);

  // Set chart options
  var options = {
    title: "Sentiment of Employees On " + floor + " floor",
    width: 400,
    height: 300,
  };

  console.log("elementId" + elementId);

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(
    document.getElementById(elementId)
  );
  chart.draw(data, options);
}

function drawTimeWiseDailyChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("timeofday", "Time of Day");
  data.addColumn("number", "Likely Neutral ");
  data.addColumn("number", "Likely Not Happy");
  data.addColumn("number", "Likely Happy");

  data.addRows([
    [{ v: [8, 0, 0], f: "8 am" }, 50, 20, 30],
    [{ v: [9, 0, 0], f: "9 am" }, 50, 22, 30],
    [{ v: [10, 0, 0], f: "10 am" }, 51, 24, 25],
    [{ v: [11, 0, 0], f: "11 am" }, 52, 25, 23],
    [{ v: [12, 0, 0], f: "12 pm" }, 50, 23, 27],
    [{ v: [13, 0, 0], f: "1 pm" }, 50, 21, 29],
    [{ v: [14, 0, 0], f: "2 pm" }, 52, 18, 30],
    [{ v: [15, 0, 0], f: "3 pm" }, 51, 17, 32],
    [{ v: [16, 0, 0], f: "4 pm" }, 52, 15, 33],
    [{ v: [17, 0, 0], f: "5 pm" }, 9, 14, 37],
  ]);

  var options = {
    title: "Percentage of Happy, Not-Happy, and Neutral Expressions",
    hAxis: {
      title: "Time of Day",
      format: "h:mm a",
      viewWindow: {
        min: [7, 30, 0],
        max: [17, 30, 0],
      },
    },
    vAxis: {
      title: "Percentage (1% - 100%)",
    },
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("time-wise-percentage-daily")
  );

  chart.draw(data, options);
}

function drawMonthWiseChart() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ["Month", "Likely Neutral", "Likely Not Happy", "Likely Happy", "Happiness Trend"],
    ["May", 45, 20, 35, 35],
    ["June", 47, 16, 37, 37],
    ["July", 50, 17, 33, 33],
    ["August", 52, 12, 30, 30],
    ["September", 51, 24, 25, 25],
    ["October", 59, 29, 20, 20],
    ["November", 54, 21, 25, 25],
    ["December", 49, 6, 35, 35],
    ["January", 48, 10, 42, 42],
  ]);

  var options = {
    title: "Track Happiness, Not-Happiness, and Neutral Emotions Monthwise",
    vAxis: { title: "Percentage of Sentiment" },
    hAxis: { title: "" },
    seriesType: "bars",
    series: { 3: { type: "line" } },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("month-wise-percentage")
  );
  chart.draw(data, options);
}
