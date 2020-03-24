<?php 
session_start();
$q = $_GET['qno'];
echo $_SESSION['ans1'][$q];
?>