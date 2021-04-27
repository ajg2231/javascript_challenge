
// from data.js
var tableData = data;

var v = d3.select("#ufo-table");

tabble(data);


function tabble(data) {
    tbody.html("");
    data.forEach((UFOsights) => {
        var row = v.append("tr");
        Object.entries(UFOsights).forEach(([key, value]) => {
            var cell = v.append("td");
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

var t = d3.select("#filter-btn");

var u = d3.select("#form");


t.on("click", boom);
u.on("submit", boom);


