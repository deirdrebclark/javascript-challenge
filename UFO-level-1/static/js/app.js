// from data.js
var tableData = data;

// Reference to the table body
var tbody = d3.select('tbody');

// Loop through ufo data and append to table
data.forEach(function(ufoData) {
    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});
