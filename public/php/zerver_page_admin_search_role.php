<?php

include 'zerver_entrance.php';

session_start();

error_reporting(0);

$email = $_SESSION["curr_email_user"];
$role_input = $_POST["search_role"];

$sql = "";

if ($role_input == "Teacher") {
    $sql = "SELECT * FROM admin_teacher_conn INNER JOIN user_accounts ON admin_teacher_conn.teacher_email = user_accounts.email WHERE user_role = '1' AND admin_email = '$email'";
} else if ($role_input == "Student") {
    $sql = "SELECT * FROM (teacher_student_connection INNER JOIN user_accounts ON teacher_student_connection.student_email = user_accounts.email) INNER JOIN admin_teacher_conn ON teacher_student_connection.teacher_email = admin_teacher_conn.teacher_email WHERE admin_email = '$email' GROUP BY student_email";
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