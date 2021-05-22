function renderData(obj){
    var panel = d3.select("#sample-metadata");

    // //Clear data in html

    panel.html("");

    // //add key and value to panel
   
    Object.entries(obj).forEach(([key, value]) => {
        panel.append("h6").text(`${key}: ${value}`);
    });
};

// Create function to read json

function getMetaData(sample){ 
    // console.log("hello");  
    d3.json("data/samples.json").then((data) => {
        console.log(data);
        var metadata = data.metadata;
        console.log(metadata);
        var selectedId;
        var filteredData = [];
        // filter data for Object with selected number

        var selectElement = d3.select("#selDataset")
            .append('select')
            .attr('class', 'select')
            .on('change', optionChanged)

        function optionChanged(a) {
            // console.log(this.value)
            filteredData = metadata.filter(x => x.id == this.value)
            console.log(filteredData)
            renderData(filteredData[0]);
        };

        // var selectElement = d3.select("selDataset");
        console.log(selectElement);
        var options = selectElement.selectAll("option").data(metadata).enter()
        .append("option").text(function(d) {return d.id;});
  
        console.log(options);

        // var dataArray = metadata.samples.filter(sampleObject => sampleObject.id.toString() === sample)[0];
        // var dataArray = metadata.filter(metadata => metadata.id === );
        // // const range = (start, end, length = end - start + 1) =>
        // //     dataArray.from({length}, (_,i) => start + i);
        // var result = dataArray[0];
        // console.log(dataArray);
    });
};

getMetaData();

// function createChart(sample) {
//     d3.json("data/samples.json").then((data) => {
//         var chartData = data.samples;
//         console.log(chartData);
//         console.log("hello");
//         var resultData = chartData.filter(sampleObject => sampleObject.id == sample);
        
//         var results = resultData[0];
//         console.log(results);

//         // console.log("hello");

//         // var otu_ids = results.otu_ids;
//         // var otu_labels = results.otu_labels;
//         // var sample_values = results.sample_values;

//     });
// }
