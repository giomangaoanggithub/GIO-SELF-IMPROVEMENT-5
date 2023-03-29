<?php

include 'zerver_entrance.php';

session_start();

error_reporting(0);

$outcome = $_POST["outcome"];
$type = $_POST["type"];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "";

    if($type == '1'){
        $sql = "UPDATE admin_teacher_conn SET connection = 1 WHERE a_t_c_id=$outcome";
    }
    else if($type == '2'){
        $sql = "UPDATE admin_teacher_conn SET connection = -1 WHERE a_t_c_id=$outcome";
    }
  
    // Prepare statement
    $stmt = $conn->prepare($sql);
  
    // execute the query
    $stmt->execute();
  
    // echo a message to say the UPDATE succeeded
  } catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
  }
  
  $conn = null;

?>