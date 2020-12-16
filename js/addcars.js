$(document).ready(function () {

    $('#addcars').on('submit', function (submit) {

        var carsdata = {
            name: $('#name').val(),
            consumption: $('#consumption').val(),
            color: $('#color').val(),
            manufacturer: $('#manufacturer').val(),
            avaiable: $('#avaiable').val(),
            year: $('#year').val(),
            horsepower: $('#horsepower').val()
        };
        submit.preventDefault();
        $.ajax({
            type: "post",
            url: 'https://webtechcars.herokuapp.com/api/cars',
            data: JSON.stringify(carsdata),
            contentType: "application/json",
            success: function () {
                window.alert("Car uploaded");
                $('#content').load("carsform.html")
            }
        });
    })
})