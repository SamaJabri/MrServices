<?php
    $servername = "localhost";
    $username = "root";
    $password = "password";
    $dbname = "mr-service-cms";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    mysqli_query($conn, "SET NAMES 'utf8' COLLATE 'utf8_general_ci'");
    // Check connection
    if ($conn -> connect_error)
    {
        die("Connection failed: ".$conn -> connect_error);
    }
?>