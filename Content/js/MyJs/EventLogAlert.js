getAllCondition();
function alertReset() {
    document.getElementById("eventAlertsDefinitions_Id").value = -1;
    document.getElementById("eventAlertsDefinitions_AlertCaption").value = "";
    document.getElementById("eventAlertsDefinitions_EventId").value = "";
    document.getElementById("eventAlertsDefinitions_AlertAddress").value = "";

}



function alertDelete(id, alertName) {
    document.getElementById("alertDeleteName").innerHTML = alertName;
    document.getElementById("alertDeleteButton").setAttribute("href", "/Home/EventLogAlertDelete/" + id);
}

function alertUpdate(id, alertCaption, eventId, alertAddress) {

    document.getElementById("eventAlertsDefinitions_Id").value = id;
    document.getElementById("eventAlertsDefinitions_AlertCaption").value = alertCaption;
    document.getElementById("eventAlertsDefinitions_EventId").value = eventId;
    document.getElementById("eventAlertsDefinitions_AlertAddress").value = alertAddress;

}

function getConditions() {
    var eventId = document.getElementById("eventAlertConditions_AlertId").value;
   
    $.ajax({
        type: "POST",
        url: "/Home/GetConditions",
        data: JSON.stringify({ id: eventId }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                var ddl = document.getElementById("ConditionName");
                for (var i = 0; i < value.length; i++) {

                    var option = document.createElement("OPTION");
                    option.innerHTML = value[i]["Text"];
                    option.value = value[i]["Text"];
                    ddl.options.add(option);

                   
                }
         
            }
            else {

            }
        },
        error: function () {

        }

    });
}

function getAllCondition() {
    var div = document.getElementById("conditionDiv");
    var table = "<h6>All Conditions</h6><table class='table table-bordered table-sm' width='100%'><thead> <tr> <th>Id</th><th>Alert</th><th>Name</th><th>Value</th><th>#</th></tr></thead><tbody>";
    $.ajax({
        type: "POST",
        url: "/Home/GetConditionValues",
        data: JSON.stringify({}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {

                for (var i = 0; i < value.length; i++) {
                    table += "<tr><td>" + value[i]["Id"] + "</td><td>" + value[i]["AlertCaption"] + "</td><td>" + value[i]["ConditionName"] + "</td><td>" + value[i]["ConditionValue"] + "</td><td> <a href='/Home/ConditionDelete/" + value[i]["Id"] + "' class='btn btn-sm btn-danger'>Delete</a> </td></tr>";
                }
                div.innerHTML = table + "</tbody></table>";
            }
            else {
                div.innerHTML = "";
            }
        },
        error: function () {
            div.innerHTML = "";
        }

    });
}