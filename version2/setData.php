<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";


// Create connection
$conn = mysqli_connect($servername, $username, $password);
$sql = "use myDB";
$conn->query($sql);
if (isset($_POST['AllRecords']))
{
    $ld=json_decode($_POST['AllRecords'],true);
    foreach($ld as $key=>$value){
     $data = json_decode($value,true);
     $date = strval($data['date']);
     $type = strval($data['type']);
     $target =strval(json_encode($data['target']));
     
    $sql = "insert into data() values('$type','$target','$date')";
    $conn->query($sql);
    echo $conn->error;
    }

}
?>