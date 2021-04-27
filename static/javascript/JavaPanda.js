
// from data.js
var tableData = data;

var tbody = d3.select("#ufo-table");



tabble(data);


function tabble(data) {
    tbody.html("");
    data.forEach((UFOsights) => {
        var row = tbody.append("tr");
        Object.entries(UFOsights).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    })
}

function boom() {

    
    d3.event.preventDefault();

 
 var j = d3.select("#datetime").property("value");

 
 
 console.log(j);
 
 
 if (j) {
 var k = data.filter(dates => dates.datetime === j); }

    
    console.log(k);

    
    tabble(k);
};


var button = d3.select("#filter-btn");

var form = d3.select("#form");


button.on("click", boom);
form.on("submit", boom);


