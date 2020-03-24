<?php 
session_start();
$a = $_GET['a'];
$q = $_GET['qno'];
$_SESSION['ans1'][$q] = $a;
?>