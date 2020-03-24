<?php
session_start();
$q = $_GET['qno'];
if(is_null($_SESSION['ans1'][$q])){
	echo "0";
}else{
	echo $_SESSION['ans1'][$q];
}
?>