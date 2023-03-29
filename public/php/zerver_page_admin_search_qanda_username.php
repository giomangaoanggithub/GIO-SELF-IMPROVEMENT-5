<?php

include 'zerver_entrance.php';

session_start();

error_reporting(0);

$email = $_SESSION["curr_email_user"];
$username_input = $_POST["search_username_q"];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM (created_questions INNER JOIN admin_teacher_conn ON created_questions.owner_teacher = admin_teacher_conn.teacher_email) INNER JOIN user_accounts ON created_questions.owner_teacher = user_accounts.email WHERE username LIKE '%$username_input%' AND admin_email = '$email'");
    $stmt->execute();
  
    // set the resulting array to associative
    $result = $stmt->FetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
  } catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
  $conn = null;
?>