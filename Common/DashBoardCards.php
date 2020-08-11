<?php


session_start();


if (!isset($_SESSION["login"])) {
    header("Location:LoginPage.php");
}

function returnJsonData($name)
{

    $json = file_get_contents('http://127.0.0.1:1085');
    $obj = json_decode($json);


    $disk = $obj->disk; //disk
    $cpu = $obj->cpu; //cpu
    $memory = $obj->memory; //memory

    if ($name == "disk") {
        return $disk;
    } elseif ($name == "cpu") {
        return $cpu;
    } elseif ($name == "memory") {
        return $memory;
    }
}

function getDiskUsageRate()
{
    global $dup;
    echo (returnJsonData("disk") . '%');
}

function getMemoryUsageRate()
{
    echo (returnJsonData("memory"));
}

function getCpuUsageRate()
{
    $json = file_get_contents('http://127.0.0.1:1085');
    $obj = json_decode($json);

    $cpu = $obj->cpu; //cpu
    echo ($cpu);
}
