<?php
session_start();
$q = $_GET['q'];
echo $_SESSION['ans2'][$q];
?>