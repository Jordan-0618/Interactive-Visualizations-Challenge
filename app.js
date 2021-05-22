// Create function to read json

function getMetaData(sample){ 
    console.log("hello");  
    d3.json("data/samples.json").then((data) => {
        console.log(data);

        var metadata = data.metadata;
        console.log(metadata);
        
        // filter data

        var filterData = metadata.filter(sampleObject => sampleObject.id == sample);
        var result = filterData[0];
        // console.log(filterData);
        console.log(fliterData);

        // console.log(result);

        var panel = d3.select("#sample-metadata");

        //Clear data in html

        panel.html("");

        //add key and value to panel
        
        // Object.entries(filterResult).forEach(([key, value]) => {
        //     panel.append("h6").text(`${key}: ${value}`);
        // console.log(d3.entries(fliterResult));


        
        // const obj; 
        // const newObj = obj || {};
        // const obj = null;
        // const newObj = obj || {};
        //     if(obj === null) {return null};
        

        // });
    });
}

getMetaData();

function createChart(sample) {
    d3.json("data/samples.json").then((data) => {
        var chartData = data.chartData;
        console.log(chartData);
        // console.log("hello");
        var resultData = chartData.filter(sampleObject => sampleObject.id == sample);
        
        // var results = resultData[0];

        // console.log("hello");

        // var otu_ids = results.otu_ids;
        // var otu_labels = results.otu_labels;
        // var sample_values = results.sample_values;

    });
}
createChart();