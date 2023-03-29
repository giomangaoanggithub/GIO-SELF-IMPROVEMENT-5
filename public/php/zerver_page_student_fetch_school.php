<?php

include 'zerver_entrance.php';

session_start();

error_reporting(0);

$email = $_SESSION["curr_email_user"];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM (teacher_student_connection INNER JOIN admin_teacher_conn ON teacher_student_connection.teacher_email = admin_teacher_conn.teacher_email) INNER JOIN companies ON admin_teacher_conn.admin_email = companies.company_admin_email WHERE student_email = '$email'");
    $stmt->execute();
  
    // set the resulting array to associative
    $result = $stmt->FetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
  } catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
  $conn = null;
?>