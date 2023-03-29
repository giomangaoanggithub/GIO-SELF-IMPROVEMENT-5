<?php

include 'zerver_entrance.php';

session_start();

error_reporting(0);

$email = $_SESSION["curr_email_user"];
$username_input = $_POST["search_username"];

$sql = "";

if($username_input == ""){
  $sql = "SELECT * FROM admin_teacher_conn INNER JOIN user_accounts ON admin_teacher_conn.teacher_email = user_accounts.email WHERE admin_email = '$email' GROUP BY teacher_email";
} else {
  $sql = "SELECT * FROM admin_teacher_conn INNER JOIN user_accounts ON admin_teacher_conn.teacher_email = user_accounts.email WHERE username LIKE '%$username_input%' AND admin_email = '$email' GROUP BY teacher_email";
}

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare($sql);
    $stmt->execute();
  
    // set the resulting array to associative
    $result = $stmt->FetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
  } catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
  $conn = null;
?>