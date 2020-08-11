
setInterval(gets, 1000);
function gets() {
    $.ajax({
        type: "POST",
        url: "/Home/GetActivePerformance",
        data: JSON.stringify(),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {

                    var tdCpu = document.getElementById("tdCpu-" + value[i]["Id"])
                    var tdMemory = document.getElementById("tdMemory-" + value[i]["Id"])
                    var tdDisk = document.getElementById("tdDisk-" + value[i]["Id"])
                    var tdNetwork = document.getElementById("tdNetwork-" + value[i]["Id"])
                    var iSeen = document.getElementById("iSeen-" + value[i]["Id"])


                    tdCpu.innerHTML = value[i]["CpuValue"] + " %";
                    tdMemory.innerHTML = value[i]["MemoryValue"] + " / " + value[i]["TotalMemory"] + " GB";
                    tdDisk.innerHTML = value[i]["DiskValue"] + " KB/s";
                    var inBound = value[i]["NetworkInboundValue"];
                    var outBound = value[i]["NetworkOutboundValue"];
                    var total = parseFloat(inBound) + parseFloat(outBound);
                    tdNetwork.innerHTML = total.toFixed(2) + " Mbps";

                    iSeen.removeAttribute("class");
                    iSeen.removeAttribute("data-original-title");
                    if (value[i]["UpdateDate"] == "Online") {
                        iSeen.setAttribute("class", "fa fa-circle green");
                    }
                    else {
                        iSeen.setAttribute("class", "fa fa-circle red");
                    }
                    iSeen.setAttribute("data-original-title", value[i]["UpdateDate"]);
                }
            }
        }
    });
}