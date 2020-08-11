<?php
if ($_GET) {
    include("settings.php");
    ob_start();
    session_start();

    $pathId = $_GET['pathId'];
    $pathName = $_GET['pathName'];
    $type = $_GET['type'];

    $str_data = file_get_contents("folderpaths.json");
    $data = json_decode($str_data, true);
    if ($type == "delete") {
        unset($data["paths"][$pathId]);
    } else {
        if ($pathName!="") {
            array_push($data["paths"], $pathName);
        }        
    }
    $fh = fopen(__DIR__ . "/folderpaths.json", 'w')
        or die("Error opening output file");
    fwrite($fh, json_encode($data, JSON_UNESCAPED_UNICODE));
    fclose($fh);
    header("Location:../index.php");
    ob_end_flush();
} else {
    header("Location:../Users.php");
}
