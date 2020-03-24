<?php
session_start();
$a = $_GET['a'];
echo $_SESSION['que'][$a][4];
?>