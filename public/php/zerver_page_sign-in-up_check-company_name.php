<?php

include 'zerver_entrance.php';

$company_name = $_POST["company_name"];

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT company_name FROM companies WHERE company_name = '$company_name'");
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->FetchAll(PDO::FETCH_ASSOC);
  
  echo json_encode($result);
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$conn = null;
?>