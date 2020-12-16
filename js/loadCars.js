$(document).ready(function (){
    $.getJSON("https://webtechcars.herokuapp.com/api/cars",function (data){
        var table = $("#carsTable");
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nameCell = $('<td>' + value.name + '</td>');
            var consumptionCell = $('<td>' + value.consumption + '</td>');
            var colorCell = $('<td>' + value.color + '</td>');
            var manufacturersCell = $('<td>' + value.manufacturer + '</td>');
            var avaiableCell = $('<td>' + value.avaiable + '</td>');
            var yearCell = $('<td>' + value.year + '</td>');
            var horsepowerCell = $('<td>' + value.horsepower + '</td>');
            $(row).append(nameCell);
            $(row).append(consumptionCell);
            $(row).append(colorCell);
            $(row).append(manufacturersCell);
            $(row).append(avaiableCell);
            $(row).append(yearCell);
            $(row).append(horsepowerCell);
            $(table).append(row);
        })
    })
})