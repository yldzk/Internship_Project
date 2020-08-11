function gets() {
    var querys = document.getElementById("txtQuery").value
   
    $.ajax({
        type: "POST",
        url: "/Home/GetOsQueryResults",
        data: JSON.stringify({ querys: querys }),
        contentType: "application/json; charset=utf-8",
        dataType: "html",
        success: function (value) {
            document.getElementById("table").innerHTML = value;
        }
    });
}