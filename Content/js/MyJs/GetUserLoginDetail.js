function getDetail(userName) {
    var tableStart = "<table id='datatable-buttons' class='table table - striped table - bordered' > <thead><tr><th>Date Time</th><th>Computer Name</th><th>Event Id</th><th>Caption</th><th>Account Domain</th><th>Account Name</th><th>Logon Type</th><th>Source Network Address</th><th>Source Port</th><th>Workstation Name</th></tr></thead><tbody>";
    var row = "";
    var tableEnd = "</tbody></table>";
    var yaz = document.getElementById("asdf");



    $.ajax({
        type: "POST",
        url: "/Home/GetUserLoginDetail",
        data: JSON.stringify({ userName: userName }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
           // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {

                    row += "<tr><td>" + value[i]["DateTime"] + "</td><td>" + value[i]["ComputerName"] + "</td><td>" + value[i]["EventId"] + "</td><td>" + value[i]["Caption"] + "</td><td>" + value[i]["Account Domain"] + "</td><td>" + value[i]["Account Name"] + "</td><td>" + value[i]["Logon Type"] + "</td><td>" + value[i]["Source Network Address"] + "</td><td>" + value[i]["Source Port"] + "</td><td>" + value[i]["Workstation Name"] + "</td></tr>";
                }
            }
            yaz.innerHTML = tableStart + row + tableEnd;
        }
    });


}