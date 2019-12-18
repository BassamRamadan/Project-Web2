<?php
$servername = "localhost";
$username = "root";
$password = "";


// Create connection
$conn = mysqli_connect($servername, $username, $password);

$sql = "CREATE DATABASE if not exists myDB";
$conn->query($sql);
$sql = "use myDB";
$conn->query($sql);

// sql to create table
$sql = "CREATE TABLE if not exists data (
    type_event text,
    target_event text,
    date_event text 
    )";
$conn->query($sql);

// if($conn->query("use myDB"))
// {
//     echo '11';
// }else{
//     echo $conn->error;
// }
// if($conn->query("truncate table data"))
// {
//     echo '1';
// }else{
//     echo $conn->error;
// }


?>