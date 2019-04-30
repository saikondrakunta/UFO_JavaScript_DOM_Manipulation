
console.log(data);
// function to create table with data input 
function createTable( data ) {
    let tbody = d3.select("tbody");
    d3.select("tbody").html("")
    data.forEach(x => {
        console.log(x);
        const row = tbody.append("tr");
        for (const key in x){
          row.append("td").text(x[key]);
        }
      })
}
createTable (data)

// Assign the data to a descriptive variable
const site = data;
 //datetime
const submit = d3.select("#filter-btn");
// Complete the click handler for the form

submit.on("click", function() {

  d3.event.preventDefault();

    const datetime = d3.select("#datetime").property("value");
    const by_datetime = site.filter(site => {
        return site.datetime === datetime;
    })
    console.log(by_datetime)
    createTable (by_datetime)

});



