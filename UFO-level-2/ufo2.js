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
    var inputCountry =d3.select("#country").property("value")
    var inputShape = d3.select("#shape").property("value")

    var filteredData = tableData.filter(function (rec) {

            var cityFlag = true;
            var stateFlag = true;
            var dateFlag = true;
            var countryFlag = true;
            var shapeFlag = true;


            if (inputCity !== "") {

                cityFlag = rec["city"] === inputCity;
            };

            if (inputState !== "") {
                stateFlag = rec["state"] === inputState;
            };

            if (inputDate !== "") {
                dateFlag = rec["datetime"] === inputDate;
            };


        if (inputCountry !== "") {

            countryFlag = rec["city"] === inputCountry;
        };

        if (inputShape !== "") {

            shapeFlag = rec["city"] === inputShape;
        };

            return dateFlag & cityFlag & stateFlag & countryFlag & shapeFlag;
        }
    );


    tableBuilder(filteredData);


});




