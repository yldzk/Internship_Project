function getDetail(computerId) {

    var tableStart = "<table class='table table-bordered table-sm'> <thead><tr><th>Computer Name</th><th>Computer Domain</th><th>User Name</th><th>Manufacturer</th><th>Model</th></tr></thead><tbody>";
    var row = "";
    var tableEnd = "</tbody></table>";
    var yaz = document.getElementById("divComputer");



    $.ajax({
        type: "POST",
        url: "/Home/GetComputerInfo",
        data: JSON.stringify({ computerId: computerId }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {

                    row += "<tr><td>" + value[i]["ComputerName"] + "</td><td>" + value[i]["ComputerDomain"] + "</td><td>" + value[i]["UserName"] + "</td><td>" + value[i]["Manufacturer"] + "</td><td>" + value[i]["Model"] + "</td></tr>";
                }
            }
            yaz.innerHTML = tableStart + row + tableEnd;
        }
    });


    var tableStartOs = "<table class='table table-bordered table-sm'> <thead><tr><th>Version</th><th>Windows Directory</th><th>Serial Number</th><th>System Directory</th><th>Os Version</th></tr></thead><tbody>";
    var rowOs = "";
    var tableEndOs = "</tbody></table>";
    var yazOs = document.getElementById("divOS");



    $.ajax({
        type: "POST",
        url: "/Home/GetComputerOsInfo",
        data: JSON.stringify({ computerId: computerId }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {

                    rowOs += "<tr><td>" + value[i]["Caption"] + "</td><td>" + value[i]["WindowsDirectory"] + "</td><td>" + value[i]["SerialNumber"] + "</td><td>" + value[i]["SystemDirectory"] + "</td><td>" + value[i]["OsVersion"] + "</td></tr>";
                }
            }
            yazOs.innerHTML = tableStartOs + rowOs + tableEndOs;
        }
    });


    var CputableStart = "<table class='table table-bordered table-sm'> <thead><tr><th>ProcessorID</th><th>CPU Name</th><th>Device ID</th><th>Manufacturer</th><th>Caption</th><th>Number Of Logical Processors</th></tr></thead><tbody>";
    var Cpurow = "";
    var CputableEnd = "</tbody></table>";
    var Cpuyaz = document.getElementById("divCPU");



    $.ajax({
        type: "POST",
        url: "/Home/GetComputerCPUInfo",
        data: JSON.stringify({ computerId: computerId }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {

                    Cpurow += "<tr><td>" + value[i]["ProcessorID"] + "</td><td>" + value[i]["CPUName"] + "</td><td>" + value[i]["DeviceID"] + "</td><td>" + value[i]["Manufacturer"] + "</td><td>" + value[i]["Caption"] + "</td><td>" + value[i]["NumberOfLogicalProcessors"] + "</td></tr>";
                }
            }
            Cpuyaz.innerHTML = CputableStart + Cpurow + CputableEnd;
        }
    });


    var DisktableStart = "<table class='table table-bordered table-sm'> <thead><tr><th>Serial Number</th><th>Caption</th><th>Disk Description</th><th>Device ID</th><th>Model</th><th>Size</th></tr></thead><tbody>";
    var Diskrow = "";
    var DisktableEnd = "</tbody></table>";
    var Diskyaz = document.getElementById("divDisk");



    $.ajax({
        type: "POST",
        url: "/Home/GetComputerDiskInfo",
        data: JSON.stringify({ computerId: computerId }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {

                    Diskrow += "<tr><td>" + value[i]["SerialNumber"] + "</td><td>" + value[i]["Caption"] + "</td><td>" + value[i]["DiskDescription"] + "</td><td>" + value[i]["DeviceID"] + "</td><td>" + value[i]["Model"] + "</td><td>" + value[i]["Size"] + "</td></tr>";
                }
            }
            Diskyaz.innerHTML = DisktableStart + Diskrow + DisktableEnd;
        }
    });


    var MemorytableStart = "<table class='table table-bordered table-sm'> <thead><tr><th>Manufacturer</th><th>Capacity</th><th>Caption</th><th>SerialNumber</th><th>Tag</th></tr></thead><tbody>";
    var Memoryrow = "";
    var MemorytableEnd = "</tbody></table>";
    var Memoryyaz = document.getElementById("divMemory");



    $.ajax({
        type: "POST",
        url: "/Home/GetComputerMemoryInfo",
        data: JSON.stringify({ computerId: computerId }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {

                    Memoryrow += "<tr><td>" + value[i]["Manufacturer"] + "</td><td>" + value[i]["Capacity"] + "</td><td>" + value[i]["Caption"] + "</td><td>" + value[i]["SerialNumber"] + "</td><td>" + value[i]["Tag"] + "</td></tr>";
                }
            }
            Memoryyaz.innerHTML = MemorytableStart + Memoryrow + MemorytableEnd;
        }
    });


    var GputableStart = "<table class='table table-bordered table-sm'> <thead><tr><th>GPU Name</th><th>GPU Status</th><th>Device ID</th><th>Size</th></tr></thead><tbody>";
    var Gpurow = "";
    var GputableEnd = "</tbody></table>";
    var Gpuyaz = document.getElementById("divGraphic");



    $.ajax({
        type: "POST",
        url: "/Home/GetComputerGpuInfo",
        data: JSON.stringify({ computerId: computerId }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {

                    Gpurow += "<tr><td>" + value[i]["GPUName"] + "</td><td>" + value[i]["GPUStatus"] + "</td><td>" + value[i]["DeviceID"] + "</td><td>" + value[i]["Size"] + "</td></tr>";
                }
            }
            Gpuyaz.innerHTML = GputableStart + Gpurow + GputableEnd;
        }
    });


    var NetworktableStart = "<table class='table table-bordered table-sm'> <thead><tr><th>Device Name</th><th>Network Interface Type</th><th>Pyhsical Address</th><th>IPVersion</th></tr></thead><tbody>";
    var Networkrow = "";
    var NetworktableEnd = "</tbody></table>";
    var Networkyaz = document.getElementById("divNetwork");



    $.ajax({
        type: "POST",
        url: "/Home/GetComputerNetworkInfo",
        data: JSON.stringify({ computerId: computerId }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {

                    Networkrow += "<tr><td>" + value[i]["DeviceName"] + "</td><td>" + value[i]["NetworkInterfaceType"] + "</td><td>" + value[i]["PyhsicalAddress"] + "</td><td>" + value[i]["IPVersion"] + "</td></tr>";
                }
            }
            Networkyaz.innerHTML = NetworktableStart + Networkrow + NetworktableEnd;
        }
    });



    var SoundtableStart = "<table class='table table-bordered table-sm'> <thead><tr><th>Device Name</th></tr></thead><tbody>";
    var Soundrow = "";
    var SoundtableEnd = "</tbody></table>";
    var Soundyaz = document.getElementById("divSound");



    $.ajax({
        type: "POST",
        url: "/Home/GetComputerSoundInfo",
        data: JSON.stringify({ computerId: computerId }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {

                    Soundrow += "<tr><td>" + value[i]["DeviceName"] + "</td></tr>";
                }
            }
            Soundyaz.innerHTML = SoundtableStart + Soundrow + SoundtableEnd;
        }
    });


    var PrintertableStart = "<table class='table table-bordered table-sm'> <thead><tr><th>Device Name</th><th>Network</th><th>Default Printer</th><th>Printer Status</th></tr></thead><tbody>";
    var Printerrow = "";
    var PrintertableEnd = "</tbody></table>";
    var Printeryaz = document.getElementById("divPrinter");



    $.ajax({
        type: "POST",
        url: "/Home/GetComputerPrinterInfo",
        data: JSON.stringify({ computerId: computerId }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {
                    Printerrow += "<tr><td>" + value[i]["PrinterName"] + "</td><td>" + value[i]["Network"] + "</td><td>" + value[i]["IsDefaultPrinter"] + "</td><td>" + value[i]["PrinterStatus"] + "</td></tr>";
                }
            }
            Printeryaz.innerHTML = PrintertableStart + Printerrow + PrintertableEnd;
        }
    });




    var table = $('#datatable').DataTable();
    $.ajax({
        type: "POST",
        url: "/Home/GetComputerSoftwareInfo",
        data: JSON.stringify({ computerId: computerId }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (value) {
            // var json = JSON.stringify(value.d);
            if (value.length > 0) {
                for (var i = 0; i < value.length; i++) {


                    table.row.add({
                        0: value[i]["InstalledSoftwareName"],
                        1: value[i]["InstalledDate"],
                        2: value[i]["Vendor"]
                    }).draw();
                }
            }
            //Softwareyaz.innerHTML = SoftwaretableStart + Softwarerow + SoftwaretableEnd;
        }
    });







}