<?php

include 'zerver_entrance.php';

session_start();

error_reporting(0);

$email = $_SESSION["curr_email_user"];
$room = $_POST["room_name"];
$teacher = $_POST["room_teacher"];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO teacher_student_connection (teacher_email, student_email, t_s_connection, room_name)
    VALUES ('$teacher', '$email', '0', '$room')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "Please wait for your teacher to respond.";
  } catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
  }
  
  $conn = null;
?>