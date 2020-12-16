$(document).ready(() => {
    getManufacturers();
    $("form").on('submit', (e) => {
        e.preventDefault();
        let id = $("form").find("select[name='manufacturer']").val();
        if (confirm("Delete manufacturer? ")) {
            $.ajax({
                url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + id,
                type: "DELETE",
                cors: true,
                crossDomain: true,
                head: {"Access-Control-Allow-Origin": "*"},
                contentType: "application/json",
                success: () => {
                    window.alert("Manufacturer deleted")
                    $('#content').load("deletemanufacturers.html")
                }

            })
        }
    })
})

function getManufacturers() {
    $("select").children().remove();
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", (data) => {
        $.each(data, (key, value) => {
            $('#manufacturer2').append("<tr>");
            $.each(value, (key, value) => {
                $('#manufacturer2').append("<td>"+key+": " +value+"</td>");
            })
            $('#manufacturer2').append("</tr>");
            $("select").append("<option value=" + value._id + ">" + value.name + "</option>");
        })
    })
}