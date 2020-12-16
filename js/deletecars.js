$(document).ready(() => {
    getCars();

    $("form").on('submit', (event) => {
        event.preventDefault();
        let id = $("form").find("select[name='car']").val();
            $.ajax({
                url: 'https://webtechcars.herokuapp.com/api/cars/' + id,
                type: "DELETE",
                success: () => {
                    window.alert("Car deleted")
                    $('#content').load("deletecars.html")
                }
            })
    })
})

function getCars() {
    $("select").children().remove();
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", (data) => {
        $.each(data, (key, value) => {
            $('#cardelete').append("<tr>");
            $.each(value, (key, value) => {
                $('#cardelete').append("<td>" + key + ": " + value + "</td>");
            })
            $('#cardelete').append("</tr>");
            $("select").append("<option value=" + value._id + ">" + value.name + "</option>");
        })
    })
}