// Create function to read json

function getMetaData(sample){ 
    // console.log("hello");  
    d3.json("data/samples.json").then((data) => {
        console.log(data);
        var metadata = data.metadata;
        console.log(metadata);
        
        // filter data for Object with selected number

        // var dataArray = metadata.samples.filter(sampleObject => sampleObject.id.toString() === sample)[0];
        // var dataArray = metadata.filter(metadata => metadata.id == sample);
        // // const range = (start, end, length = end - start + 1) =>
        // //     dataArray.from({length}, (_,i) => start + i);
        // var result = dataArray[0];
        // console.log(dataArray);

        // // console.log(result);

        // var panel = d3.select("#sample-metadata");

        // //Clear data in html

        // panel.html("");

        // //add key and value to panel
        
        // Object.entries(metadata).forEach((result) => {
        //     panel.append("h6").text(result[0] + ":" + result[1]);
        // });
        
    });
}

getMetaData();

function createChart(sample) {
    d3.json("data/samples.json").then((data) => {
        var chartData = data.samples;
        console.log(chartData);
        console.log("hello");
        var resultData = chartData.filter(sampleObject => sampleObject.id == sample);
        
        var results = resultData[0];
        console.log(results);

//         // console.log("hello");

//         // var otu_ids = results.otu_ids;
//         // var otu_labels = results.otu_labels;
//         // var sample_values = results.sample_values;

    });
}
createChart();