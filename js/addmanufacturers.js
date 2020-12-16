$( document ).ready(function() {
    document.querySelector("#date").value = new Date().toISOString().substr(0, 10);
    $(function () {
        $('#addmanufacturers').on('submit', function (submit) {
            let manufacturersdata = {
                name: $('#name').val(),
                country: $('#country').val(),
                founded: $('#date').val()
            };
            submit.preventDefault();
            if(confirm("Add manufacturer?")) {
                $.ajax({
                    url: 'https://webtechcars.herokuapp.com/api/manufacturers',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(manufacturersdata),
                    success: function () {
                        window.alert("Manufacturer loaded");
                        $('#content').load("manufacturersform.html");
                    }
                })
            }
        });
    });
})