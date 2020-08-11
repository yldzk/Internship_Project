var cpuChart = echarts.init(document.getElementById("cpuChart"));
    var cpuOption = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [{
            name: 'CPU',
            type: 'gauge',
            detail: {
                formatter: '{value}%'
            },
            data: [{
                value: 50,
                name: 'CPU'
            }]
        }]
    };


    var memoryChart = echarts.init(document.getElementById("memoryChart"));
    var totalRam = 0;
    var memoryOption = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c} GB'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [{
            name: 'Memory',
            type: 'gauge',
            min: 0,
            max: totalRam,
            detail: {
                formatter: '{value}%'
            },
            data: [{
                value: 50,
                name: 'Memory'
            }]
        }]
    };


    function gets() {
        $.get("http://192.168.0.141:1085", function(data, status) {
            var json = JSON.parse(data);
            cpuOption.series[0].data[0].value = json.cpu;
            memoryOption.series[0].data[0].value = json.memory;
            memoryOption.series[0].max = 100;
            cpuChart.setOption(cpuOption, true);
            memoryChart.setOption(memoryOption, true);

        });


    }

    setInterval(gets, 1000);