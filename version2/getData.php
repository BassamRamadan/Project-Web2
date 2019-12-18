<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";


// Create connection
$conn = mysqli_connect($servername, $username, $password);
$sql = "use myDB";
$conn->query($sql);

$sql = "select * from data";
$RequestResult = $conn->query($sql);
if($RequestResult != false)
{
   while($row = $RequestResult->fetch_assoc()){
    echo "<br>";
    echo json_encode($row);
    echo "<br>";
   }
}else{
    echo $conn->error;
}
?>