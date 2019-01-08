// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);

var ufoTable = d3.select('tbody');

tableData.forEach((reportUFO) => {
    var row = ufoTable.append("tr");
    Object.entries(reportUFO).forEach(([x,y]) => {
        if (x == 'city') {
            var cell = ufoTable.append("td").attr('class','titlecase');
           //  cell.classed('titlecase',true);
            cell.text(y);
        } else {
           if (x == 'state') {
               var cell = ufoTable.append("td").attr('class','state');
               cell.text(y);
           } else {
               if (x == 'country') {
                   var cell = ufoTable.append("td").attr('class','state');
                   cell.text(y);
               } else {
                   if (x == 'shape') {
                       var cell = ufoTable.append("td").attr('class','titlecase');
                       cell.text(y);
                   } else {
                       var cell = ufoTable.append("td");
                       cell.text(y);   
                   }    
               } 
           }
       }
      });
});

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

 // Prevent the page from refreshing
 d3.event.preventDefault();

 // clear table rows
 ufoTable.selectAll('td').remove();

 // Select the input element and get the raw HTML node
 var inputElement = d3.select("#datetime");

 // Get the value property of the input element
 var inputValue = inputElement.property("value");

 console.log(inputValue);

 if (inputValue !== null){
 var filteredData = tableData.filter(reportUFO => reportUFO.datetime === inputValue);
};
//  if (inputCityalue !==null){
//  var filteredData = tableData.filter(reportUFO => reportUFO.city === inputCityalue);
//  };

 console.log(filteredData);

//  var tbodyfiltered = d3.select("tbody");

 filteredData.forEach((reportUFO) => {
    // console.log(x);
   var row = ufoTable.append("tr");
   Object.entries(reportUFO).forEach(([x, y]) => {
     if (x == 'city') {
         var cell = ufoTable.append("td").attr('class','titlecase');
        //  cell.classed('titlecase',true);
         cell.text(y);
     } else {
        if (x == 'state') {
            var cell = ufoTable.append("td").attr('class','state');
            cell.text(y);
        } else {
            if (x == 'country') {
                var cell = ufoTable.append("td").attr('class','state');
                cell.text(y);
            } else {
                if (x == 'shape') {
                    var cell = ufoTable.append("td").attr('class','titlecase');
                    cell.text(y);
                } else {
                    var cell = ufoTable.append("td");
                    cell.text(y);   
                }    
            } 
        }
    }
   });
 });


});