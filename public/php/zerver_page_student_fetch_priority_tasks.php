<?php

include 'zerver_entrance.php';

session_start();

error_reporting(0);

$email = $_SESSION["curr_email_user"];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM (((created_questions FULL JOIN classrooms ON created_questions.classroom_id = classrooms.room_id) FULL JOIN teacher_student_connection ON classrooms.room_name = teacher_student_connection.room_name) FULL JOIN user_accounts ON teacher_student_connection.teacher_email = user_accounts.email) FULL JOIN student_answers ON created_questions.question_id = student_answers.question_id WHERE student_email = '$email' AND owner_student='$email' AND publish = '1'");
    $stmt->execute();
  
    // set the resulting array to associative
    $result = $stmt->FetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
  } catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
  $conn = null;
?>