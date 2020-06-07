var tableData = data;
var tbody = d3.select("tbody");

function tableBuilder(data) {

    tbody.selectAll("tr").remove();

    data.forEach(function (record) {

        var row = tbody.append("tr");

        Object.values(record).forEach(function (recordValue) {

                var td = row.append("td")

                td.text(recordValue)
            }
        );

    });

};


tableBuilder(tableData);

var findButton = d3.select("#filter-btn");


findButton.on("click", function () {

    var inputDate = d3.select("#datetime").property("value")
    var inputCity = d3.select("#city").property("value")
    var inputState = d3.select("#state").property("value")

    var filteredData = tableData.filter(function (rec) {

            var cityFlag = true;
            var stateFlag = true;
            var dateFlag = true;


            if (inputCity !== "") {

                cityFlag = rec["city"] === inputCity;
            };

            if (inputState !== "") {
                stateFlag = rec["state"] === inputState;
            };

            if (inputDate !== "") {
                dateFlag = rec["datetime"] === inputDate;
            };


            return dateFlag & cityFlag & stateFlag;
        }
    );


    tableBuilder(filteredData);


});




