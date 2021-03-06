var a = d3.select("#ufo-table");

data.forEach((UFO) => {
    var b = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
        var c = a.append("td");
        c.text(value);
    });
});

var d = d3.select("#filter-btn");

var e = d3.select("#form");


button.on("click", hopeForTheBest);
form.on("submit", hopeForTheBest);

function hopeForTheBest() {
    
    d3.event.preventDefault();
    
    var f = d3.select("#datetime");

    var g = f.property("value");

    console.log(g);
    console.log(data);

    var h = data.filter(dates => dates.datetime === g);

    console.log(h);
}