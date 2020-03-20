// From data.js
var ufoData = data;

// Create function to populate table with UFO data

function popTable(show, filteredData) {
    // Reference table body
    var tbody = d3.select('tbody');

    // Loop through ufo data and append to table
    if (show === 'all') {
        data.forEach(function(ufoData) {
            var row = tbody.append("tr");
            Object.entries(ufoData).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    } else {
        // Remove the rows in the existing table
        var ufoTable = document.getElementById("ufo-table");
        var rowCount = ufoTable.rows.length;

        for (var x = rowCount - 1; x > 0; x--) {
           ufoTable.deleteRow(x);
        }


        // Add the filtered rows to the table
        for (var i = 0; i < filteredData.length; i++) {
        
            var row = tbody.append("tr");
            var limitedData = filteredData[i];
            
            for (var j = 0; j < Object.keys(limitedData).length; j++ ) {

                var cell = row.append("td");
                cell.text(Object.values(limitedData)[j]);

            };  
                
        };
    };
};

// Populate the table with ufo data
popTable('all', 'none')

// Filter by Date/Time

// Select Date/Time button
var button = d3.select('#filter-btn');

// On 'click' perform:
button.on('click', function() {

    // Select input and get HTML
    var inputElement = d3.select('#datetime');

    var inputValue = inputElement.property('value');

    // Filter the data
    var filteredData = data.filter(spotted => spotted.datetime === inputValue);

    // Select the filtered data
    if (inputValue === '') {
        popTable('all', filteredData);
    }
    else {
        popTable('datetime', filteredData);
    };
});
