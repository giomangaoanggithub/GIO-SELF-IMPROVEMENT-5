<?php

session_start();

$word = $_POST["sent_picture"];
$new = "";

for($x = 12; $x < strlen($word); $x++){
    $new .= $word[$x];
}

$_SESSION["saved_picture_name"] = $new;

echo $_SESSION["saved_picture_name"];

?>