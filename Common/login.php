<?php
if($_POST){

ob_start();
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

$str_data = file_get_contents("folderpaths.json");
$data = json_decode($str_data, true);


if($username==$data["user"]["username"] && $password == $data["user"]["password"])  {
    $_SESSION["login"] = "true";
    $_SESSION["user"] = $username;
    $_SESSION["pass"] = $password;
    $_SESSION["uid"] = $row[0];
    header("Location:../index.php");
}
else {
    if($username=="" or $password=="") {
        echo "<center>Lutfen kullanici adi ya da sifreyi bos birakmayiniz..! <a href=javascript:history.back(-1)>Geri Don</a></center>";
    }
    else {
        echo "<center>Kullanici Adi/Sifre Yanlis.<br><a href=javascript:history.back(-1)>Geri Don</a></center>";
    }
}

ob_end_flush();
}
else{
    header("Location:../LoginPage.php");
}
