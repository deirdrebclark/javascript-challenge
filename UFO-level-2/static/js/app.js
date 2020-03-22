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


// Select 'Filter Table' button
var button = d3.select('#filter-btn');

// On 'click' perform:
button.on('click', function() {

    var inputElement = ''
    var inputValue = ''
    var filtered = false
    var filteredData = ''


    // Select date and get HTML
    inputElement = d3.select('#datetime');
    inputValue = inputElement.property('value');

    if (inputValue > '') {
        // Filter the data
        filtered = true
        filteredData = data.filter(spotted => spotted.datetime === inputValue);
    }
    
    // Select city and get HTML
    inputElement = d3.select('#city');
    inputValue = inputElement.property('value');

    if (inputValue > '') {
        // Filter the data
        if (filtered === true) {
            filteredData = filteredData.filter(spotted => spotted.city === inputValue);
        }
        else {
            filtered = true
            filteredData = data.filter(spotted => spotted.city === inputValue);
        }
    }

    // Select state and get HTML
    inputElement = d3.select('#state');
    inputValue = inputElement.property('value');

    if (inputValue > '') {
        // Filter the data
        if (filtered === true) {
            filteredData = filteredData.filter(spotted => spotted.state === inputValue);
        }
        else {
            filtered = true
            filteredData = data.filter(spotted => spotted.state === inputValue);
        }
    }

    // Select country and get HTML
    inputElement = d3.select('#country');
    inputValue = inputElement.property('value');

    if (inputValue > '') {
        // Filter the data
        if (filtered === true) {
            filteredData = filteredData.filter(spotted => spotted.country === inputValue);
        }
        else {
            filtered = true
            filteredData = data.filter(spotted => spotted.country === inputValue);
        }
    }

    // Select shape and get HTML
    inputElement = d3.select('#shape');
    inputValue = inputElement.property('value');

    if (inputValue > '') {
        // Filter the data
        if (filtered === true) {
            filteredData = filteredData.filter(spotted => spotted.shape === inputValue);
        }
        else {
            filtered = true
            filteredData = data.filter(spotted => spotted.shape === inputValue);
        }
    }

    // Select the filtered data
    if (filtered === false) {
        popTable('all', 'none');
    }
    else {
        popTable('filtered', filteredData);
    };
});
